import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import { apiKey } from './api-key';

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "playertoo-43706.firebaseapp.com",
  databaseURL: "https://playertoo-43706.firebaseio.com",
  projectId: "playertoo-43706",
  storageBucket: "playertoo-43706.appspot.com",
  messagingSenderId: "382880258359",
  appId: "1:382880258359:web:3ee6699944a42f35c7e2b2",
  measurementId: "G-L95RXSW981"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database().ref();
export const fireDb = firebase.firestore();