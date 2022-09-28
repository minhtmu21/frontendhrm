// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_qbT1CGhZnoWHoY6IIPLpdY6pYeAcBdM",
  authDomain: "chatmd-422c9.firebaseapp.com",
  projectId: "chatmd-422c9",
  storageBucket: "chatmd-422c9.appspot.com",
  messagingSenderId: "215934554985",
  appId: "1:215934554985:web:4304f695db473894c023f8",
  measurementId: "G-FXE1N5TNX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

