import { initializeApp } from "firebase/app";
import { initializeFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// Firebase config aqui embaixo
const firebaseConfig = {
    apiKey: "AIzaSyDhplIki9RzCJo0q2Vo_U8ZbTPtqPDgZCM",
    authDomain: "getitdone-5481a.firebaseapp.com",
    projectId: "getitdone-5481a",
    storageBucket: "getitdone-5481a.appspot.com",
    messagingSenderId: "1066731551784",
    appId: "1:1066731551784:web:f11ec80c33d1fdeff2491d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const db = initializeFirestore(firebaseApp, {
    ignoreUndefinedProperties: true,
});
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

// Timestamp
const timestamp = serverTimestamp();

export { db, auth, storage, timestamp };
