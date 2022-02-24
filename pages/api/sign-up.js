import validationSchema from "utils/signUpFormValidationSchema";
import { firestore } from "utils/firebaseAdmin";

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
    await firestore.collection("participants").add(req.body);
    res.status(200).send();
  }
}
