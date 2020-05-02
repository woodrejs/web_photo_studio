require("dotenv").config();

const MailConfig = {
  user_id: process.env.REACT_APP_EMAILJS_USER_ID,
  template_id: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  replay_to: process.env.REACT_APP_EMAILJS_REPLAY_TO,
};
export default MailConfig;

export const fbConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
