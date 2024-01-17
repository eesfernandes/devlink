import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPKkTbJBzfRKdEguE9PCQ9p7NTNzmgKdA",
  authDomain: "reactlinks-79f14.firebaseapp.com",
  projectId: "reactlinks-79f14",
  storageBucket: "reactlinks-79f14.appspot.com",
  messagingSenderId: "969165543863",
  appId: "1:969165543863:web:5762bb88fe604ca4e9f032"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};