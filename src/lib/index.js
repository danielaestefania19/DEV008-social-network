// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const registrar = () => {
  const email = document.getElementById('idEmail').value;
  const password = document.getElementById('idPassword').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};

export function redirige() {
  console.log("redirigiendo...");
  return "/inicio";
}

export const iniciarSesion = () => {
  
  const email = document.querySelector('#idUserEmail').value;
  const password = document.querySelector('#idUserPass').value;

  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
    redirige();
    const user = userCredential.user;
    console.log('usuario en sesión' + user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
};


export function observador(){

  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      //aparece();
      const uid = user.uid;
      console.log(uid);
      return uid;
    } else {
      console.log("no existe usuario activo");
      return null;
    }
  });
  
}
