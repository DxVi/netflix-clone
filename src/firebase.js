  
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoWC1_q1e3Ry-KZxn1cAJIMrEemZa_lmE",
    authDomain: "netflix-clone-4262c.firebaseapp.com",
    databaseURL: "https://netflix-clone-4262c.firebaseio.com",
    projectId: "netflix-clone-4262c",
    storageBucket: "netflix-clone-4262c.appspot.com",
    messagingSenderId: "516420061881",
    appId: "1:516420061881:web:08892d19422a93164b6968",
    measurementId: "G-FHK398EHVR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig )

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
