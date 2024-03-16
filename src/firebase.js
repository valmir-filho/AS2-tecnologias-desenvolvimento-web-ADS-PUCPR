import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBHFzaPMOLdk2u0gKW_YzbL2RKQ6at5rnc",
    authDomain: "atividadesomativa2-98f41.firebaseapp.com",
    projectId: "atividadesomativa2-98f41",
    storageBucket: "atividadesomativa2-98f41.appspot.com",
    messagingSenderId: "677862904280",
    appId: "1:677862904280:web:9bcc751172d202966622ad"
};


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;