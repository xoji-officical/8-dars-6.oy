import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa3wCvzAc37aMyg1G9BLWv1mPzfOhKdRE",
  authDomain: "project-b978c.firebaseapp.com",
  projectId: "project-b978c",
  storageBucket: "project-b978c.appspot.com",
  messagingSenderId: "647082578703",
  appId: "1:647082578703:web:7ecd305b4250d7a965a47a"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
