import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCGgOb_pAvv6LVS_m8iJmyAIRcHfxa1sQ",
  authDomain: "perfumeriakarina-d0ac7.firebaseapp.com",
  projectId: "perfumeriakarina-d0ac7",
  storageBucket: "perfumeriakarina-d0ac7.appspot.com",
  messagingSenderId: "800268970011",
  appId: "1:800268970011:web:149d3e624d739ee7f0f0be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFireBase = () => app
export const auth = getAuth(app) 