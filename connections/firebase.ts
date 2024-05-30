import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCi2zecWS_4-A8xSTyV4J5AYDNMG01UWPI",
  authDomain: "for-my-dashboard-75d9e.firebaseapp.com",
  projectId: "for-my-dashboard-75d9e",
  storageBucket: "for-my-dashboard-75d9e.appspot.com",
  messagingSenderId: "381329956072",
  appId: "1:381329956072:web:a76373ae07e6f8269b7d5d",
  measurementId: "G-L7QCH4KW65",
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
