// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDoc, setDoc, doc, getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(firebaseApp);
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
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
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
