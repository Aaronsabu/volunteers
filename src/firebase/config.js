import * as firebase from 'firebase';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);
const firebaseConfig = {
  apiKey: "AIzaSyBCBCHjqBIYtNFCCOzdPxPojL2f0BcZQb8",
  authDomain: "volunteers-26768.firebaseapp.com",
  projectId: "volunteers-26768",
  storageBucket: "volunteers-26768.appspot.com",
  messagingSenderId: "475678282896",
  appId: "1:475678282896:web:c90ae72b74faaeedf2f415",
};

const app = firebase.initializeApp(firebaseConfig);
export const  db = app.database();

export const userCred= (cred)=>{
  db.ref('/users/003').set(cred).then(() => console.log(cred));
}