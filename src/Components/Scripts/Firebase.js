import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAF7sRq8jOocrvz_DuaixHNps-Ia0XKSE8",
  authDomain: "zenithyuga-a8a17.firebaseapp.com",
  projectId: "zenithyuga-a8a17",
  storageBucket: "zenithyuga-a8a17.appspot.com",
  messagingSenderId: "437257124390",
  appId: "1:437257124390:web:611350622ecece39ba44e7",
  measurementId: "G-9SP8FBQTP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
