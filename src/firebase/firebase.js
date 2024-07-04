import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBW8GVfE7lSt0OFESz-H6rmhJwpE44uwmk",
  authDomain: "nyt-clone-38586.firebaseapp.com",
  projectId: "nyt-clone-38586",
  storageBucket: "nyt-clone-38586.appspot.com",
  messagingSenderId: "220151247816",
  appId: "1:220151247816:web:d9721d27bb54065b0a06fd",
  measurementId: "G-TE4RY2EMJR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
