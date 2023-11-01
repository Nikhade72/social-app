import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCuQGGHpMfypDuwnMbXViJZuPRK65nc4nU",
  authDomain: "social-app-f8d87.firebaseapp.com",
  projectId: "social-app-f8d87",
  storageBucket: "social-app-f8d87.appspot.com",
  messagingSenderId: "325272352885",
  appId: "1:325272352885:web:5177281628b48d6b13a03c",
  measurementId: "G-KX9FCQ866X"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app, auth};
