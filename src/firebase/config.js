import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCBCHjqBIYtNFCCOzdPxPojL2f0BcZQb8",
  authDomain: "volunteers-26768.firebaseapp.com",
  databaseURL: "https://volunteers-26768-default-rtdb.firebaseio.com",
  projectId: "volunteers-26768",
  storageBucket: "volunteers-26768.appspot.com",
  messagingSenderId: "475678282896",
  appId: "1:475678282896:web:c90ae72b74faaeedf2f415",
  measurementId: "G-E8NWCK68EH"
};

var firebaseConfigActive = {
  apiKey: "AIzaSyA5EQukxkUZvhoDNn_gSlrY_fSf3BWmz5o",
  authDomain: "active-volunteers.firebaseapp.com",
  databaseURL: "https://active-volunteers-default-rtdb.firebaseio.com",
  projectId: "active-volunteers",
  storageBucket: "active-volunteers.appspot.com",
  messagingSenderId: "271484964676",
  appId: "1:271484964676:web:7fb72601ee32249f6f9111",
  measurementId: "G-E182W6CFJK"
};

let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}


var app2;

if (!firebase.apps.length) {
  app2 = firebase.initializeApp(firebaseConfigActive);
} 

export const database2 = firebase.database(app2);

export const db = app.firestore();

export const auth = firebase.auth();

export const userCred= (cred)=>{
  firebase.database().ref('/users/001').set(cred).then(() => console.log(cred));
};
