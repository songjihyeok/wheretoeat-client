import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const initializeFirebase = ()=>{
  const firebaseConfig = {
    apiKey: "AIzaSyAZrtytxoNGDcN8cXnkmTsrJZgWcSRxECQ",
    authDomain: "wheretoeat-bbcd3.firebaseapp.com",
    projectId: "wheretoeat-bbcd3",
    storageBucket: "wheretoeat-bbcd3.appspot.com",
    messagingSenderId: "1001353406974",
    appId: "1:1001353406974:web:8bd3ade3d2abf51f8b38af",
    measurementId: "G-2VGZE372M7"
  };
  
  
  const app = initializeApp(firebaseConfig);
}


export default initializeFirebase