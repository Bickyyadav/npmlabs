import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "npmlabs-da38f.firebaseapp.com",
    projectId: "npmlabs-da38f",
    storageBucket: "npmlabs-da38f.firebasestorage.app",
    messagingSenderId: "889996273783",
    appId: "1:889996273783:web:3bcf69bd691e8bcaaafe72"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }
