import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDN0kgm6TUlxyv--Dq0_paVA2MJQTcb4xA",
    authDomain: "crwn-db-c0687.firebaseapp.com",
    projectId: "crwn-db-c0687",
    storageBucket: "crwn-db-c0687.appspot.com",
    messagingSenderId: "715851670622",
    appId: "1:715851670622:web:50795a5b92ca2875ed00cf"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;