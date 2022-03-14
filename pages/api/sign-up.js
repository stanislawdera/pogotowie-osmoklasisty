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
    const counterRef = firestore.collection("helpers").doc("counter");
    const participantRef = firestore.collection("participants").doc();
    const mailsCollection = firestore.collection("mails");
    const standbyCollection = firestore.collection("standby");

    try {
      const tRes = await firestore.runTransaction(async (t) => {
        const counter = await t.get(counterRef);
        const placesCounter = counter.data().places;

        if (placesCounter < process.env.LIMIT_OF_PLACES) {
          await t.update(counterRef, { places: placesCounter + 1 });
          await t.create(participantRef, req.body);

          // participant email
          await t.create(mailsCollection.doc(), {
            to: req.body.email,
            template: {
              name: "participant-welcome",
              data: {
                firstName: req.body.firstName,
              },
            },
          });

          // parent email
          await t.create(mailsCollection.doc(), {
            to: req.body.parentEmail,
            template: {
              name: "parent-welcome",
              data: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
              },
            },
          });

          return;
        } else {
          await t.create(standbyCollection.doc(), {
            ...req.body,
            time: Date.now(),
          });
          res.status(423).json({ error: "no-places" });
          return;
        }
      });

      // success
      res.status(201).send();
    } catch (e) {
      res.status(500).send();
    }
  }
}
