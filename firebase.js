import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDN8x4DTwwNZN4VqAdaok72BOpEkcdLZlY",
  authDomain: "disney-clone-8fbc3.firebaseapp.com",
  projectId: "disney-clone-8fbc3",
  storageBucket: "disney-clone-8fbc3.appspot.com",
  messagingSenderId: "397462586062",
  appId: "1:397462586062:web:ae260a57d024363ce3469f",
  measurementId: "G-Q5MKSHQ0ZH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
