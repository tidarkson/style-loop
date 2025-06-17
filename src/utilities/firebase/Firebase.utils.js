// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDoc, setDoc, doc, getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP4U9ArGQirpciAk3YnlvfNUbJMIXH1ig",
  authDomain: "style-loop-db.firebaseapp.com",
  projectId: "style-loop-db",
  storageBucket: "style-loop-db.firebasestorage.app",
  messagingSenderId: "663811787067",
  appId: "1:663811787067:web:200e141373cab47209cf1e",
  measurementId: "G-J7THJG2KLR",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Provider Method to tell us which service we are using
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// Instantiate Database
export const auth = getAuth();

export const db = getFirestore(firebaseApp);

// Sign In User With Google

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// create userDocumentFromAuth is a function that creates a user document in the Firestore database when a new user signs up or logs in with Google. It checks if the user document already exists, and if not, it creates one with the user's information.

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // If user data does not exist
  if (!userSnapshot.exists()) {
    // Create / set the document with the data from userAuth in my collection
    const { displayName, email, phoneNumber } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        phoneNumber,
        uid: userAuth.uid,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  // If user data exists
  return userDocRef;
};

// Create new user with email and password

export const createAuthUserWithEmailAndPassword = async (params) => {
  const { email, password } = params;
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign in user with email and password

export const signInAuthUserWithEmailAndPassword = async (params) => {
  const { email, password } = params;
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

// Observer function to listen for authentication state changes 

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);