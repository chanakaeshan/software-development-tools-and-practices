import firebase from 'firebase/app';
import 'firebase/database';
import { Database } from '../lib/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDZ-MBXrwInAPuwNW86W7wT8OWqllIvdlo",
    authDomain: "accommodation-6ede2.firebaseapp.com",
    databaseURL: "https://accommodation-6ede2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "accommodation-6ede2",
    storageBucket: "accommodation-6ede2.appspot.com",
    messagingSenderId: "910150181669",
    appId: "1:910150181669:web:0bab9c6e946eafad2cb0cc",
    measurementId: "G-5EFBR1H2L0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const database = firebase.database();