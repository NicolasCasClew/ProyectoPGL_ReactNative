// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyB_F-Crly_Jt9PhJ3aLuvtJzetAVFSokaE",
  authDomain: "react-pgl.firebaseapp.com",
  projectId: "react-pgl",
  storageBucket: "react-pgl.appspot.com",
  messagingSenderId: "747048326859",
  appId: "1:747048326859:web:d3cb276b225acdc4106d4e"
};

let app;
//app = firebase.initializeApp(firebaseConfig);
if (firebase.apps.lenght === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app= firebase.app()
}

const auth = firebase.auth()

export {auth};
