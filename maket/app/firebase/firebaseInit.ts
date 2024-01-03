import { initializeApp } from 'firebase/app';
import { initializeAuth, browserLocalPersistence } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
    apiKey: 'AIzaSyB2n72DodslcBkFrpTLyGb7D4u5t3T1nUc',
    databaseURL: 'https://testtaskfl-default-rtdb.europe-west1.firebasedatabase.app/',
    storageBucket: 'gs://testtaskfl.appspot.com',
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: browserLocalPersistence,
});
export const storage = getStorage(app);
