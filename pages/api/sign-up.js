import validationSchema from "utils/signUpFormValidationSchema";

const validate = async (data) => {
  try {
    await validationSchema.validate(data);
  } catch (err) {
    console.log(err);
    return false;
  }
  return true;
};

export default async function handler(req, res) {
  const isValid = await validate(req.body);
  if (!isValid) res.status(400).json({ error: "form-invalid" });
  else {
    // TODO: Save data to database
    res.status(200).json(req.body);
  }
}
