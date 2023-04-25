
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhg6IlkKTRTML3Kgs-T5AtsaBFB6GCRNA",
  authDomain: "signal-clone-build-79661.firebaseapp.com",
  projectId: "signal-clone-build-79661",
  storageBucket: "signal-clone-build-79661.appspot.com",
  messagingSenderId: "553522075488",
  appId: "1:553522075488:web:ffd0b04f025e097b06f005"
};

let app;

// Initialize Firebase
  app = initializeApp (firebaseConfig);

  const db = getFirestore(app);
  const authentication = getAuth(app);

  export {db, authentication};