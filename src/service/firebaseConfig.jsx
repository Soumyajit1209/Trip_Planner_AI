// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxnipZUX7M_mmjRd3uHE6u02WwRFtq_iA",
  authDomain: "project1-baeec.firebaseapp.com",
  projectId: "project1-baeec",
  storageBucket: "project1-baeec.firebasestorage.app",
  messagingSenderId: "379474961662",
  appId: "1:379474961662:web:3cae918c0c7a1f677fb1af",
  measurementId: "G-B718LX11VH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
//const analytics = getAnalytics(app);