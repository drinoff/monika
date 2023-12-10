import { initializeApp } from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC5DETXceHjbzdqiuYpIYoisslqfx1jrlM',
  authDomain: 'famultipolis-c8859.firebaseapp.com',
  databaseURL: 'https://famultipolis-c8859-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'famultipolis-c8859',
  storageBucket: 'famultipolis-c8859.appspot.com',
  messagingSenderId: '430656384826',
  appId: '1:430656384826:web:a3439c92ff8075b1cd6a03',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

