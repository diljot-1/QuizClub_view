import Firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyDUHpzZDKJlzaj5x4xt0710lQWZVP01_QA",
    authDomain: "test-engine-514f3.firebaseapp.com",
    projectId: "test-engine-514f3",
    storageBucket: "test-engine-514f3.appspot.com",
    messagingSenderId: "417983398607",
    appId: "1:417983398607:web:93e8d5e2d5ff0fa22a2dba"
};

const firebase=Firebase.initializeApp(config);
export const auth=firebase.auth();
export default firebase;