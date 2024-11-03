// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK8HsKQCNVvv_oNcTsSixgl2ZDLa1OypY",
  authDomain: "bookroster-80528.firebaseapp.com",
  projectId: "bookroster-80528",
  storageBucket: "bookroster-80528.firebasestorage.app",
  messagingSenderId: "456764403413",
  appId: "1:456764403413:web:6725352b192f7436cbbc5c",
  measurementId: "G-G7F07VHKYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);