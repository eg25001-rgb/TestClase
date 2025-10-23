// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4OwXcECDfTi63QVDHq4im8cxGiw9iGMA",
  authDomain: "appnoticias-d58b6.firebaseapp.com",
  projectId: "appnoticias-d58b6",
  storageBucket: "appnoticias-d58b6.firebasestorage.app",
  messagingSenderId: "617512643765",
  appId: "1:617512643765:web:88cf093c8339c30b2322fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Inicializar y exportar servicios
export const auth = getAuth(app);  // autenticar
export const db = getFirestore(app); // base de datos
export const storage = getStorage(app); // archivos
export { app };

