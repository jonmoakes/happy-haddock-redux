import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjciBnsfId_PLllFteTGF-mYC9HNtE7VQ",
  authDomain: "happy-haddock-redux-db.firebaseapp.com",
  projectId: "happy-haddock-redux-db",
  storageBucket: "happy-haddock-redux-db.appspot.com",
  messagingSenderId: "810075381119",
  appId: "1:810075381119:web:c3561a77b28935002a0e4a",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
