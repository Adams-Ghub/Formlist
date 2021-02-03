import * as firebase from "firebase";
import "firebase/firebase-auth";

const firebaseConfig = {
  apiKey: "AIzaSyDD5LRzA4pNMj3yvyl6_B6H2GVd4ch6uTk",
  authDomain: "rnfirebase-3ffc5.firebaseapp.com",
  projectId: "rnfirebase-3ffc5",
  storageBucket: "rnfirebase-3ffc5.appspot.com",
  messagingSenderId: "868148338",
  appId: "1:868148338:web:9b819591affef48043ceeb",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
