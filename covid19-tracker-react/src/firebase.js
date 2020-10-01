import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC8ops5bZTTG5p5cnd4KtC1nCvUq9CUoqI",
  authDomain: "covid19tracker-90707.firebaseapp.com",
  databaseURL: "https://covid19tracker-90707.firebaseio.com",
  projectId: "covid19tracker-90707",
  storageBucket: "covid19tracker-90707.appspot.com",
  messagingSenderId: "431733525036",
  appId: "1:431733525036:web:af235d830fa7f1ea115f89",
  measurementId: "G-XMJ4BHYQHF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
