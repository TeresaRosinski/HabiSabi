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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
};
return userRef;

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
