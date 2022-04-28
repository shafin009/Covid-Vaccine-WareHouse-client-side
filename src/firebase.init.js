// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZE8_kwoE4REqeNJYSQHRdL_WSvcRMbZ4",
    authDomain: "covid-vaccine-d02e5.firebaseapp.com",
    projectId: "covid-vaccine-d02e5",
    storageBucket: "covid-vaccine-d02e5.appspot.com",
    messagingSenderId: "686589810541",
    appId: "1:686589810541:web:44dc85be24bfab4804ec64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;