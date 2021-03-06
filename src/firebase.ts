// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
// Required for side-effects
require("firebase/firestore");

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyBphAMQp9saLimHqwImhB28cmn1TXc3EF0",
    authDomain: "ff-it-home.firebaseapp.com",
    projectId: "ff-it-home",
    storageBucket: "ff-it-home.appspot.com",
    messagingSenderId: "42452221061",
    appId: "1:42452221061:web:51cd7bb235f9645d1a3dec",
    measurementId: "G-N3T4N8BZGQ"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

window.firebase = firebase;
window.db = db;

//examples
// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });

// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} =>`, doc.data());
//     });
// });