import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

console.log('Firebase Config:', {
  apiKey: firebaseConfig.apiKey ? '✓ Set' : '✗ Missing',
  authDomain: firebaseConfig.authDomain ? '✓ Set' : '✗ Missing',
  projectId: firebaseConfig.projectId ? '✓ Set' : '✗ Missing',
  storageBucket: firebaseConfig.storageBucket ? '✓ Set' : '✗ Missing',
  messagingSenderId: firebaseConfig.messagingSenderId ? '✓ Set' : '✗ Missing',
  appId: firebaseConfig.appId ? '✓ Set' : '✗ Missing'
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;