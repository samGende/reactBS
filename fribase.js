// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2DaSXkxmyqxB9pvTdgVJQ3CG3TCS1Hnc",
  authDomain: "ffwtest-ef9b1.firebaseapp.com",
  projectId: "ffwtest-ef9b1",
  storageBucket: "ffwtest-ef9b1.appspot.com",
  messagingSenderId: "725212416675",
  appId: "1:725212416675:web:270205d6555d7e91ac8d16",
  measurementId: "G-MDKD1ZSH1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{auth}
