import { initializeApp } from "firebase/app";



import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // config file 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};









