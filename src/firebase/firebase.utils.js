import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCUQexn87d9aZ4Z23z8-BTIlP_zPUzI1cE",
  authDomain: "clothing-db-66fc4.firebaseapp.com",
  databaseURL: "https://clothing-db-66fc4.firebaseio.com",
  projectId: "clothing-db-66fc4",
  storageBucket: "clothing-db-66fc4.appspot.com",
  messagingSenderId: "538121001082",
  appId: "1:538121001082:web:e00f0a1e4272c6b1ffc3c3",
  measurementId: "G-GBZ5PFP7YH",
};

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
