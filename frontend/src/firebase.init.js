// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9OpNfXhdPFz_qbknpAxv-oGgpFAArTlU",
    authDomain: "imagebook-digilabsrnd.firebaseapp.com",
    projectId: "imagebook-digilabsrnd",
    storageBucket: "imagebook-digilabsrnd.appspot.com",
    messagingSenderId: "274223612858",
    appId: "1:274223612858:web:fe0bf370b6a252c2b0d383",
    measurementId: "G-QBFG88WX6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;