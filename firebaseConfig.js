// import usersApi from "API/usersApi";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const firebaseConfig = {
  apiKey: "AIzaSyBnl5EPYBd5HSLwzIQsS5iJ-GM6g3Tk-Ek",
  authDomain: "mcimobileapp-1655321492006.firebaseapp.com",
  projectId: "mcimobileapp-1655321492006",
  storageBucket: "mcimobileapp-1655321492006.appspot.com",
  messagingSenderId: "923551324099",
  appId: "1:923551324099:web:44ff181787ba1277944f76",
  measurementId: "G-C0MCK7ZS9N",
};
export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

// const messaging = getMessaging(FIREBASE_APP);
// onMessage(messaging, (payload) => {
//   // ...
// });
