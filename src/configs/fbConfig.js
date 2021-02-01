import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoUz2IT14e4Y6xJzkCur7DWxcqSL5dCDw",
  authDomain: "mario-react-redux.firebaseapp.com",
  projectId: "mario-react-redux",
  storageBucket: "mario-react-redux.appspot.com",
  messagingSenderId: "558234020360",
  appId: "1:558234020360:web:07e7bdd848398ebf1fffbd",
  measurementId: "G-Q65QS13H43",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
