import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from "./config/firebaseConfig";

const firebseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebseApp);
const db = getFirestore(firebseApp);

export { auth, db };