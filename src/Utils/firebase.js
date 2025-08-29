// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCoC1o0_cVkLUE_oJsliE2EeAw49gzxls",
  authDomain: "data-e41e5.firebaseapp.com",
  databaseURL: "https://data-e41e5-default-rtdb.firebaseio.com",
  projectId: "data-e41e5",
  storageBucket: "data-e41e5.firebasestorage.app",
  messagingSenderId: "491535475274",
  appId: "1:491535475274:web:ad7c1a8219fbe680a13cb3",
  measurementId: "G-LH0BDFXBMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
 export const auth = getAuth();