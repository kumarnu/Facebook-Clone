import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyBtqTCuvNJImGKVXCgIIe9GfXcse8n3PQY",
  authDomain: "facebook-by-nitish.firebaseapp.com",
  databaseURL: "https://facebook-by-nitish.firebaseio.com",
  projectId: "facebook-by-nitish",
  storageBucket: "facebook-by-nitish.appspot.com",
  messagingSenderId: "882679566165",
  appId: "1:882679566165:web:8fb7c539e1ffe3541729dc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();  // For Google Authentication

//Export to use in other files
export {auth, provider};
export default db;