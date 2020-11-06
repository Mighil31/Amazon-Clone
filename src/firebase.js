// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDDGLP2-GQabih9cpx3G-sw5EYVIfPoWwg",
    authDomain: "clone-13955.firebaseapp.com",
    databaseURL: "https://clone-13955.firebaseio.com",
    projectId: "clone-13955",
    storageBucket: "clone-13955.appspot.com",
    messagingSenderId: "787969192208",
    appId: "1:787969192208:web:ce36a75ab10fe98f3c7595",
    measurementId: "G-W995PQ6XH8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { db, auth };