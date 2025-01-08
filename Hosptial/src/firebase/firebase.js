import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACNtxLiEmkrtXByDTbzGptkswwejdQOTY",
  authDomain: "newhospital-bb70d.firebaseapp.com",
  projectId: "newhospital-bb70d",
  storageBucket: "newhospital-bb70d.appspot.com",
  messagingSenderId: "770530209809",
  appId: "1:770530209809:web:008782510c24741432c1b0",
  measurementId: "G-CMLHKD5R34",
};

const app = initializeApp(firebaseConfig);

export { app };
