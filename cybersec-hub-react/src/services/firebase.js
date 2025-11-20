import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqdv2iqVQMX5UC9bJ1yJ4SSEfTKn5r0MA",
  authDomain: "web-assignment-3be77.firebaseapp.com",
  projectId: "web-assignment-3be77",
  storageBucket: "web-assignment-3be77.firebasestorage.app",
  messagingSenderId: "912096052088",
  appId: "1:912096052088:web:849629f100e410bb20be8d",
  measurementId: "G-S25PR70CK5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
