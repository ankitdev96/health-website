import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const initializeAuth = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuth;