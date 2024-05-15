import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcnBwAoec-dsEDCjowf6I-lH3TPp3wQGg",
  authDomain: "clone-6ed0d.firebaseapp.com",
  projectId: "clone-6ed0d",
  storageBucket: "clone-6ed0d.appspot.com",
  messagingSenderId: "580741646107",
  appId: "1:580741646107:web:5198a70d03e9c5768375be",
  measurementId: "G-B40KCHND26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);