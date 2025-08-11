// Firebase client configuration
import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error('Firebase initialization error:', error);
  throw new Error('Failed to initialize Firebase');
}

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Connect to emulators in development
if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_FIREBASE_USE_EMULATORS === 'true') {
  // Only connect to emulators if not already connected
  if (!globalThis.FIRESTORE_EMULATOR_CONNECTED) {
    try {
      connectFirestoreEmulator(db, 'localhost', 8080);
      globalThis.FIRESTORE_EMULATOR_CONNECTED = true;
    } catch (error) {
      console.warn('Firestore emulator connection failed:', error);
    }
  }

  if (!globalThis.AUTH_EMULATOR_CONNECTED) {
    try {
      connectAuthEmulator(auth, 'http://localhost:9099');
      globalThis.AUTH_EMULATOR_CONNECTED = true;
    } catch (error) {
      console.warn('Auth emulator connection failed:', error);
    }
  }

  if (!globalThis.STORAGE_EMULATOR_CONNECTED) {
    try {
      connectStorageEmulator(storage, 'localhost', 9199);
      globalThis.STORAGE_EMULATOR_CONNECTED = true;
    } catch (error) {
      console.warn('Storage emulator connection failed:', error);
    }
  }
}

export { app };
export default app;
