import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCn6aqttoO0SQo5dpjuMAMiLZRgzjmLUqE",
  authDomain: "net-ninja-marioplain.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplain.firebaseio.com",
  projectId: "net-ninja-marioplain",
  storageBucket: "net-ninja-marioplain.appspot.com",
  messagingSenderId: "133251054719"
};

firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true
});

export default firebase;