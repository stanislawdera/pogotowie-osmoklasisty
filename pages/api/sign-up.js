import validationSchema from "utils/signUpFormValidationSchema";
import { firestore, db } from "utils/firebaseAdmin";

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
    const counterRef = db.ref("counter");
    const count = await (await counterRef.get()).val();

    if (count < process.env.LIMIT_OF_PLACES) {
      await firestore
        .collection("participants")
        .add({ ...req.body, count: count });
      await counterRef.set(count + 1);
      res.status(201).send();
    } else {
      res.status(423).json({ error: "places-limit-exceeded" });
    }
  }
}
