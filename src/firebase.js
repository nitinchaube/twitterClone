import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyAl6fpwKWopDCn8vQF_fVuR2CNoT5zf3as",
  authDomain: "twitter-clone-32244.firebaseapp.com",
  databaseURL: "https://twitter-clone-32244.firebaseio.com",
  projectId: "twitter-clone-32244",
  storageBucket: "twitter-clone-32244.appspot.com",
  messagingSenderId: "571091935283",
  appId: "1:571091935283:web:cbe40f9879164299fbc346",
  measurementId: "G-222K5FXG7G"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;