import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//import {seedDatabase} from '../seed';

const config = {
    apiKey: "AIzaSyAwH1-yoQCRmY4JhXwK0uLUJtYvbbAvoAA",
    authDomain: "instagram-a95e0.firebaseapp.com",
    projectId: "instagram-a95e0",
    storageBucket: "instagram-a95e0.appspot.com",
    messagingSenderId: "104811659764",
    appId: "1:104811659764:web:a2f35db392dc2230aab9a1",
    measurementId: "G-BDB3GK4SR5"
  };

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase);
export { firebase, FieldValue };