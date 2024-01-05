// // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBoi8AXFAhcfqfXG6HCpfDfs2poMIFZ5iE",
  authDomain: "modul1-1.firebaseapp.com",
  projectId: "modul1-1",
  storageBucket: "modul1-1.appspot.com",
  messagingSenderId: "212206644111",
  appId: "1:212206644111:web:b51451860a1f985f3cf9fa",
  measurementId: "G-GY1M7V6NZM",
};
const app = initializeApp(firebaseConfig);

export async function signInWithGoogle() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
}
