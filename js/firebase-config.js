// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkhDUIFMufagnCPA3i3MIeTjX6ly67BGo",
  authDomain: "educacion-vial-76fb8.firebaseapp.com",
  projectId: "educacion-vial-76fb8",
  storageBucket: "educacion-vial-76fb8.appspot.com",
  messagingSenderId: "428167527172",
  appId: "1:428167527172:web:6efa033ff6f93349346e51"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };

