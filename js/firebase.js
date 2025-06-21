// js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBotekgRT6dwQ8hd4Qfnbs9VEe2TbtkXfk",
  authDomain: "fju-futsal.firebaseapp.com",
  projectId: "fju-futsal",
  storageBucket: "fju-futsal.firebasestorage.app",
  messagingSenderId: "329759968777",
  appId: "1:329759968777:web:ba0e8a8f9bf5b31a5ff2d8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase conectado com sucesso: ", db);

// ✅ ESTA LINHA É OBRIGATÓRIA:
export { db };


