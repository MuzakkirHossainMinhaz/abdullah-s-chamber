// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKzS3JhAYzJW7Pe4psj9YJNKJNEOkeBI0",
  authDomain: "independent-service-prov-9208a.firebaseapp.com",
  projectId: "independent-service-prov-9208a",
  storageBucket: "independent-service-prov-9208a.appspot.com",
  messagingSenderId: "30576145093",
  appId: "1:30576145093:web:cdfb4e9ca5094ba0c576ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;