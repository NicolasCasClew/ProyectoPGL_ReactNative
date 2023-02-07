// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import * as data from './keys.json';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

 const firebaseConfig = {
  apiKey: data.apiLlave,
  authDomain: data.authDominio,
  projectId: data.projectIdentificacion,
  storageBucket: data.storageCubo,
  messagingSenderId: data.messagingEnviadorId,
  appId: data.appIdentificador,
};

let app;
//app = firebase.initializeApp(firebaseConfig);
if (firebase.app.lenght === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app= firebase.app()
}

const auth = firebase.auth()

export {auth};
