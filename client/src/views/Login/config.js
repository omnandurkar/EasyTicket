
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzpIWUZsQ9SwOTJW65II5K3XuceKjz2_M",
  authDomain: "travel-b63b3.firebaseapp.com",
  projectId: "travel-b63b3",
  storageBucket: "travel-b63b3.appspot.com",
  messagingSenderId: "493027842397",
  appId: "1:493027842397:web:6d1bb472f5e7def796f0b4",
  measurementId: "G-LPQ81D215M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};

