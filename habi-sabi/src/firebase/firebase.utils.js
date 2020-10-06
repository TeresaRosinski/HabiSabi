import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDYNjaurCWyjIj5FljM-S9pCL-QsQL1DtM",
  authDomain: "habi-sabi.firebaseapp.com",
  databaseURL: "https://habi-sabi.firebaseio.com",
  projectId: "habi-sabi",
  storageBucket: "habi-sabi.appspot.com",
  messagingSenderId: "91432125900",
  appId: "1:91432125900:web:76a2141ad291b00ac68969",
  measurementId: "G-JNJYDCRYPE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
