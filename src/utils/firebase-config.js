
import { initializeApp } from "firebase/app";
import { auth, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSA0sgkfXMPPIey9JT3SuyzTdS8m-HOmU",
  authDomain: "react-netflix-clone-c233f.firebaseapp.com",
  projectId: "react-netflix-clone-c233f",
  storageBucket: "react-netflix-clone-c233f.firebasestorage.app",
  messagingSenderId: "166759077686",
  appId: "1:166759077686:web:7f7f3578be31aff9ce8597",
  measurementId: "G-X9VXEKDJ85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);