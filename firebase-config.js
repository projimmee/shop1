// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByX25hocRu8D6dbHtANQdx5Wr01Y5xNvc",
  authDomain: "shop1-67c92.firebaseapp.com",
  projectId: "shop1-67c92",
  storageBucket: "shop1-67c92.firebasestorage.app",
  messagingSenderId: "900276278272",
  appId: "1:900276278272:web:b3aa53aaf552a0b1ecb4e5",
  measurementId: "G-Z7V0FJMFD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);