import firebase from "firebase";

//Check Day3 challenge
//firebaseConfig is copied and pasted from Firebase> click Setting and then Project Settings > go to the bottom

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj7IU-UfckYnIunwd1Ul7T9G0FqS3UHos",
  authDomain: "amzn-2-clone-c2c68.firebaseapp.com",
  projectId: "amzn-2-clone-c2c68",
  storageBucket: "amzn-2-clone-c2c68.appspot.com",
  messagingSenderId: "216221807312",
  appId: "1:216221807312:web:1e4c1c1baff588e688a4d5",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
