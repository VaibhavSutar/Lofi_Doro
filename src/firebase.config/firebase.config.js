// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { getFirestore, getDoc, doc } from 'firebase/firestore';

// import 'firebase/firestore';
// import {firebase} from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyDz1bdJgHqbQZ6CNemC7ManGAjVd1MEuBU",
  authDomain: "lofi-doro.firebaseapp.com",
  projectId: "lofi-doro",
  storageBucket: "lofi-doro.appspot.com",
  messagingSenderId: "467833471397",
  appId: "1:467833471397:web:d7aa0195739822ce0ce84c",
  measurementId: "G-PPTKQ9V9VC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});
const auth = getAuth(app);
const firestore = getFirestore(app);
export{auth,provider, firestore};
// export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);