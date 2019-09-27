import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCJC2YDG9OjoPEtC78IWMd39DrFgTGQt_s",
    authDomain: "crwn-db-94cf7.firebaseapp.com",
    databaseURL: "https://crwn-db-94cf7.firebaseio.com",
    projectId: "crwn-db-94cf7",
    storageBucket: "",
    messagingSenderId: "239855343585",
    appId: "1:239855343585:web:f997d422d8f280965fa4a0",
    measurementId: "G-73DCGVFFCM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;