import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_gV2Z_IH7fw7LInEGnKacY9z1d3RseDc",
    authDomain: "online-otizm-danisma.firebaseapp.com",
    projectId: "online-otizm-danisma",
    storageBucket: "online-otizm-danisma.firebasestorage.app",
    messagingSenderId: "198318067510",
    appId: "1:198318067510:web:420f67a8aaf227c745ad97",
    measurementId: "G-JV6M08TS5V"
  };
  // Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);

// Firestore bağlantısını oluştur ve dışa aktar
export const db = getFirestore(app);