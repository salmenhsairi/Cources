import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApoGhyYPfRNg7ZDqXKA7ib4jNOH3AOUVE",
  authDomain: "react-basic-api-d5c18.firebaseapp.com",
  databaseURL: "https://react-basic-api-d5c18-default-rtdb.firebaseio.com",
  projectId: "react-basic-api-d5c18",
  storageBucket: "react-basic-api-d5c18.appspot.com",
  messagingSenderId: "901845554830",
  appId: "1:901845554830:web:d2f108a8590816ff595bdf",
  measurementId: "G-08VJGLNB2F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
