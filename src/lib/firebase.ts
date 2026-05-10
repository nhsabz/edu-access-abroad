import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIDM9VJ_ib1xxLcKKfBZcmSimS0-0zskg",
  authDomain: "edu-access-abroad.firebaseapp.com",
  projectId: "edu-access-abroad",
  storageBucket: "edu-access-abroad.firebasestorage.app",
  messagingSenderId: "399857564583",
  appId: "1:399857564583:web:fbde0b44b15786da819482",
  measurementId: "G-KB11481YQW"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
