import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

require('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyD5-4CkTFEGFRJTQaONDGeeYtQ9Ys7N5Ts",
    authDomain: "nitrkl-testimonials.firebaseapp.com",
    projectId: "nitrkl-testimonials",
    storageBucket: "nitrkl-testimonials.appspot.com",
    messagingSenderId: "420729848462",
    appId: "1:420729848462:web:84f1a847de56acad923fdf"
});
  



// var firebaseConfig = {
//     apiKey: "AIzaSyD5-4CkTFEGFRJTQaONDGeeYtQ9Ys7N5Ts",
//     authDomain: "nitrkl-testimonials.firebaseapp.com",
//     projectId: "nitrkl-testimonials",
//     storageBucket: "nitrkl-testimonials.appspot.com",
//     messagingSenderId: "420729848462",
//     appId: "1:420729848462:web:84f1a847de56acad923fdf"
// };

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();
export const auth = firebase.auth
export const firestore = firebase.firestore
export default db;