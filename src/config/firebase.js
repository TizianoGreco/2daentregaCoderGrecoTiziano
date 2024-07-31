import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgeor1ivHGj1j35HDorFXD7j3R2pptS5Y",
  authDomain: "lvcapo-7512b.firebaseapp.com",
  projectId: "lvcapo-7512b",
  storageBucket: "lvcapo-7512b.appspot.com",
  messagingSenderId: "86896266050",
  appId: "1:86896266050:web:841906d487ad760e51d6db",
  measurementId: "G-J4N60MZTNS"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export { db };
