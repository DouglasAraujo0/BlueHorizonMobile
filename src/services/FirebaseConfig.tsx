// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL7Mvk93rBnYNlx8I4ivusRNBOKAhcfM0",
  authDomain: "bluehorizon-6a42d.firebaseapp.com",
  projectId: "bluehorizon-6a42d",
  storageBucket: "bluehorizon-6a42d.appspot.com",
  messagingSenderId: "516162791148",
  appId: "1:516162791148:web:c0e24b234768d9e63c67c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);