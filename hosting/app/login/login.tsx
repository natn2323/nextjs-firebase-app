'use client';

import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { useEffect, useState } from 'react';

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

export default function Login({}) {
    const [isClient, setClient] = useState(false);
    useEffect(() => setClient(true), []);

    useEffect(() => {
        // if (typeof window !== 'undefined' ) {
        if (isClient && global?.window) {
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const auth = getAuth(app);

            // FirebaseUI config.
            var uiConfig = {
                signInSuccessUrl: '<url-to-redirect-to-on-success>',
                signInOptions: [
                    // Leave the lines as is for the providers you want to offer your users.
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                    firebase.auth.GithubAuthProvider.PROVIDER_ID,
                    firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
                ],
                // tosUrl and privacyPolicyUrl accept either url string or a callback
                // function.
                // Terms of service url/callback.
                tosUrl: '<your-tos-url>',
                // Privacy policy url/callback.
                // privacyPolicyUrl: function () {
                //     window.location.assign('<your-privacy-policy-url>');
                // }
            };
    
            // // Initialize the FirebaseUI Widget using Firebase.
            // var ui = new firebaseui.auth.AuthUI(firebase.auth());
            var ui = new firebaseui.auth.AuthUI(auth);
            // // The start method will wait until the DOM is loaded.
            ui.start('#firebaseui-auth-container', uiConfig);
        }
    }, [isClient]);

    return <div></div>
}