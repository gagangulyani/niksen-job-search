// Firebase Admin SDK configuration
import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { getStorage } from 'firebase-admin/storage';

// Firebase Admin configuration
interface FirebaseAdminConfig {
  projectId: string;
  clientEmail: string;
  privateKey: string;
}

// Initialize Firebase Admin SDK
let app: App;

const initializeFirebaseAdmin = (): App => {
  // Check if Firebase Admin app already exists
  if (getApps().length > 0) {
    return getApps()[0];
  }

  // Get configuration from environment variables
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      'Missing Firebase Admin configuration. Please set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY environment variables.'
    );
  }

  const config: FirebaseAdminConfig = {
    projectId,
    clientEmail,
    privateKey,
  };

  try {
    // Initialize the Firebase Admin app
    app = initializeApp({
      credential: cert(config),
      projectId: config.projectId,
      // Optional: Add storage bucket if needed
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });

    console.log('Firebase Admin SDK initialized successfully');
    return app;
  } catch (error) {
    console.error('Firebase Admin initialization error:', error);
    throw new Error('Failed to initialize Firebase Admin SDK');
  }
};

// Initialize the app
app = initializeFirebaseAdmin();

// Initialize Firebase Admin services
export const adminDb = getFirestore(app);
export const adminAuth = getAuth(app);
export const adminStorage = getStorage(app);

// Helper functions for common operations
export const verifyIdToken = async (idToken: string) => {
  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    return decodedToken;
  } catch (error) {
    console.error('Token verification error:', error);
    throw new Error('Invalid token');
  }
};

export const createCustomToken = async (uid: string, additionalClaims?: object) => {
  try {
    const customToken = await adminAuth.createCustomToken(uid, additionalClaims);
    return customToken;
  } catch (error) {
    console.error('Custom token creation error:', error);
    throw new Error('Failed to create custom token');
  }
};

// Export the app instance
export { app as adminApp };
export default app;
