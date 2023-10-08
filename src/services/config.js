
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyD2l6KaXs-bmzTa9gbfro3RTSykIM7t6ug",
  authDomain: "coderhouse-dc4f3.firebaseapp.com",
  projectId: "coderhouse-dc4f3",
  storageBucket: "coderhouse-dc4f3.appspot.com",
  messagingSenderId: "269944112753",
  appId: "1:269944112753:web:64ba8f8b3b59edcf9e7dd0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);