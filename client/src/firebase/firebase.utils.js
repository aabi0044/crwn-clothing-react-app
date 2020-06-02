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
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot)
    if (!snapShot.exists) {
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
            console.log("error", error.message)
        }
    }
    return userRef;
}
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })
    return await batch.commit();
}
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollections.reduce((accumulator, collection) => {
        console.log('accumulator', accumulator);
        console.log('collection', collection)
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {})
}

export const getCurrentUser = () =>{
    return new Promise((resolve, reject) =>{
        const unsubscribe = auth.onAuthStateChanged(userAuth=>{
            unsubscribe();
            resolve(userAuth);

        },reject)
    })
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// googleProvider.setCustomParameters({ prompt: 'select-accout' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
