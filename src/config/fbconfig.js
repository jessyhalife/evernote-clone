import firebase from "firebase";
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA79ZFQ2o1MuR56oVqsnxjw_03tZOaQ2ZI",
  authDomain: "evernote-clone-9d02d.firebaseapp.com",
  projectId: "evernote-clone-9d02d",
  storageBucket: "evernote-clone-9d02d.appspot.com",
  messagingSenderId: "519577586608",
  appId: "1:519577586608:web:79151fe6340801de2ca475",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase