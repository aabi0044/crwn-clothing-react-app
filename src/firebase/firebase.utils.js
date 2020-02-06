import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDdjyczfsyI9ItnZKS_FROFLoi94vmpWm8",
    authDomain: "crwn-db-reactjs-a8894.firebaseapp.com",
    databaseURL: "https://crwn-db-reactjs-a8894.firebaseio.com",
    projectId: "crwn-db-reactjs-a8894",
    storageBucket: "crwn-db-reactjs-a8894.appspot.com",
    messagingSenderId: "1038318317385",
    appId: "1:1038318317385:web:e21d993ad59cbfb244f498",
    measurementId: "G-NE7XZF9MBK"
};

firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select-accout' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
