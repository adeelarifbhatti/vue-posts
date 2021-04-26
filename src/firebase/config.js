import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBEvgSljTg6I-EmUBJa8Z8ozGvh81BglDw",
    authDomain: "posts-30aec.firebaseapp.com",
    projectId: "posts-30aec",
    storageBucket: "posts-30aec.appspot.com",
    messagingSenderId: "943716117650",
    appId: "1:943716117650:web:203313d0c71fd1a7024a4b"
  };
  //init firebase
  firebase.initializeApp(firebaseConfig);

  //init firestore service
  const projectPost = firebase.firestore();
  const firebaseTimeStamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectPost, firebaseTimeStamp}