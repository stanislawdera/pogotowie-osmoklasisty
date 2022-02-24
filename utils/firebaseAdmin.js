import decodeBase64 from "utils/decodeBase64";
import admin from "firebase-admin";

const adminSDKCredentialsJSON = decodeBase64(
  process.env.GOOGLE_APPLICATION_CREDENTIALS
);
const adminSDKCredentials = JSON.parse(adminSDKCredentialsJSON);

if (admin.apps.length === 0) {
  const app = admin.initializeApp({
    credential: admin.credential.cert({
      privateKey: adminSDKCredentials.private_key,
      clientEmail: adminSDKCredentials.client_email,
      projectId: adminSDKCredentials.project_id,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

export const firestore = admin.firestore();
export const db = admin.database();
