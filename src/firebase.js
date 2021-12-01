import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCFOb1qsRi2hGWQvXm2zgI4ibmGB23Kf1c",
    authDomain: "e-clone-2d6db.firebaseapp.com",
    databaseURL: "https://e-clone-2d6db.firebaseio.com",
    projectId: "e-clone-2d6db",
    storageBucket: "e-clone-2d6db.appspot.com",
    messagingSenderId: "84948614014",
    appId: "1:84948614014:web:759e428d9e1624d5f1112f",
    measurementId: "G-3DWKTHM4D0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };