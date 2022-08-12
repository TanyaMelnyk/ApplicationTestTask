import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgQ79OncMP5m2vDHzU559bgJMNDQtFNZs",
  authDomain: "techtask1.firebaseapp.com",
  projectId: "techtask1",
  storageBucket: "techtask1.appspot.com",
  messagingSenderId: "490888516251",
  appId: "1:490888516251:web:c98fb0528cc99b89972c3e",
  databaseURL:
    "https://techtask1-default-rtdb.europe-west1.firebasedatabase.app/",
};

export const app = initializeApp(firebaseConfig);
