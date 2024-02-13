import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDXdT26IKS9euoU7Ggv-LvrQGFI0CHnuOU",
  authDomain: "blog-7dacc.firebaseapp.com",
  projectId: "blog-7dacc",
  storageBucket: "blog-7dacc.appspot.com",
  messagingSenderId: "748532614778",
  appId: "1:748532614778:web:de06cb5bc4e6a95a035dc3"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDB, auth, storage };