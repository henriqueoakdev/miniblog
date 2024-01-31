import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJrY8f--i4067sIgMq0TFgSiVm4qYMXZU",
  authDomain: "miniblog-57ee6.firebaseapp.com",
  projectId: "miniblog-57ee6",
  storageBucket: "miniblog-57ee6.appspot.com",
  messagingSenderId: "1085627028081",
  appId: "1:1085627028081:web:dc60125c492bfa5db041d0",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
