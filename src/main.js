import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBPDWMvfy2gh_b0Z8q9wGJrdvF2Yz3NI3o",
  authDomain: "trabajo09-cc485.firebaseapp.com",
  projectId: "trabajo09-cc485",
  storageBucket: "trabajo09-cc485.appspot.com",
  messagingSenderId: "669805638608",
  appId: "1:669805638608:web:2b40046fd5b4a7c52bbfd5"
};

firebase.initializeApp(firebaseConfig)
var storage = firebase.storage();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, storage };

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
      const usuarioActivo ={
        email: user.email,
        uid: user.uid
      }
     store.dispatch('detectarUsuario', usuarioActivo)
     console.log(usuarioActivo)
    // ...
  } else {
    console.log(user)
    store.dispatch('detectarUsuario', user)
    // User is signed out
    // ...
  } 
});

createApp(App).use(store).use(router).mount('#app')

