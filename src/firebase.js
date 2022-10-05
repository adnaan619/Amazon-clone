import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDxNrNcNiUAGGDqq0MUXs02Emo63636xOU",
    authDomain: "challenge-9c53a.firebaseapp.com",
    projectId: "challenge-9c53a",
    storageBucket: "challenge-9c53a.appspot.com",
    messagingSenderId: "517553616332",
    appId: "1:517553616332:web:782fced5ffeddcfb7ad969",
    measurementId: "G-B1SFWZV7DM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};

//make sure to push to production again later on.