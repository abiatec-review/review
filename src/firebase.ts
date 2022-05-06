import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: 'AIzaSyAp_OGF1oC0mQBoLP56j2zPYtG6qtCM52U',
  authDomain: 'rickandmorty-7485a.firebaseapp.com',
  projectId: 'rickandmorty-7485a',
  storageBucket: 'rickandmorty-7485a.appspot.com',
  messagingSenderId: '147768342037',
  appId: '1:147768342037:web:3f96461942e0e27090001c',
  measurementId: 'G-ENE41GJCH7',
});

//@ts-ignore
// export const auth = app.auth();

export const auth = getAuth(app);

export default app;