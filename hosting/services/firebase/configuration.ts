// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNzL8BUgiuHakRJmSt4cz_IM9Tl60e-bE",
  authDomain: "nextjs-firebase-app-a982f.firebaseapp.com",
  projectId: "nextjs-firebase-app-a982f",
  storageBucket: "nextjs-firebase-app-a982f.appspot.com",
  messagingSenderId: "948947118955",
  appId: "1:948947118955:web:b43d047fed775a7adffa2e",
  measurementId: "G-SZXBN8NMWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
    app,
    analytics,
    auth
}
