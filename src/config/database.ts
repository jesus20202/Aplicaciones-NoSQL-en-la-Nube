import * as admin from 'firebase-admin';

const mockServiceAccount = {
  type: "service_account",
  project_id: "demo-project-dev",
  private_key_id: "mock123456789abcdef",
  private_key: "-----BEGIN PRIVATE KEY-----\nMOCK_KEY_CONTENT_HERE\n-----END PRIVATE KEY-----\n",
  client_email: "mock-admin@demo-project-dev.iam.gserviceaccount.com",
  client_id: "mock987654321",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/mock-admin%40demo-project-dev.iam.gserviceaccount.com"
};

admin.initializeApp({
  credential: admin.credential.cert(mockServiceAccount as admin.ServiceAccount),
  databaseURL: "https://demo-project-dev-default-rtdb.firebaseio.com"
});

const firestore = admin.firestore();
export default firestore;