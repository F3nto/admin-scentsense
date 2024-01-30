import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAyzghtHyLmun7rZAwD2x9XsfrIuv-c1lw",
  authDomain: "uploadingimages-65e11.firebaseapp.com",
  projectId: "uploadingimages-65e11",
  storageBucket: "uploadingimages-65e11.appspot.com",
  messagingSenderId: "213252836562",
  appId: "1:213252836562:web:94a24720984518162db10b",
  measurementId: "G-NG4DJFB1ER"
};

//! initialize firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);