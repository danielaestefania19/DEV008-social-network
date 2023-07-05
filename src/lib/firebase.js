/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

import {
  collection,
  addDoc,
  getFirestore,
  doc,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJD1pvnH8yRlwa1e0jsgnO21Xu8Hiso8M',
  authDomain: 'powemp-37392.firebaseapp.com',
  projectId: 'powemp-37392',
  storageBucket: 'powemp-37392.appspot.com',
  messagingSenderId: '196468811247',
  appId: '1:196468811247:web:191b6369b8cbe2f786421a',
};

// Initialize Firebase y firestore
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/*
|--------------------------------------------------------------------------
| Inicia sesion
|--------------------------------------------------------------------------
*/
export const iniciaSesionUsuario = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
/*
|--------------------------------------------------------------------------
| Registra una nueva usuaria
|--------------------------------------------------------------------------
*/
export const registrarUsuario = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
/*
|--------------------------------------------------------------------------
| Inicia sesion con la usuaria de Google
|--------------------------------------------------------------------------
*/
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const inicioGoogle = () => {
  return signInWithPopup(auth, provider);
};
/*
|--------------------------------------------------------------------------
| Cierra sesion de la usuaria
|--------------------------------------------------------------------------
*/
export const salirSesion = () => {
  return signOut(auth);
};
/*
|--------------------------------------------------------------------------
| Actualiza nombre de la usuaria
|--------------------------------------------------------------------------
*/
export const actualizaPerfil = (nombre) => {
  return updateProfile(auth.currentUser, {
    displayName: nombre,
  });
};
/*
|--------------------------------------------------------------------------
| obtener post en DB firestore
|--------------------------------------------------------------------------
// */
const colRef = (collection(db, 'post'));

export const getpost = (publicaciones) => onSnapshot(colRef, publicaciones);

/*
|--------------------------------------------------------------------------
| agregar post en DB firestore
|--------------------------------------------------------------------------
*/
export const pushDoc = (post) => {
  return addDoc(colRef, { postcontent: post });
};


/*
|--------------------------------------------------------------------------
| obtener datos del usuario
|--------------------------------------------------------------------------
*/

export const dataUserCurrent = () => {
  const auth = getAuth();
  return user = auth.currentUser;
  
};



