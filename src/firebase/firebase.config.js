// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId
  apiKey: "AIzaSyDCqdIVQDWpLeA70nQghW2f4Ee8OhlSiJs",
  authDomain: "detective-kevin.firebaseapp.com",
  projectId: "detective-kevin",
  storageBucket: "detective-kevin.appspot.com",
  messagingSenderId: "74021519753",
  appId: "1:74021519753:web:712f3f47ed284f88d62158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;