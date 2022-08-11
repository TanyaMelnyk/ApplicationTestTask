import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Home } from "./Pages";
import { Login } from "./Pages";
import "./style.scss";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgQ79OncMP5m2vDHzU559bgJMNDQtFNZs",
  authDomain: "techtask1.firebaseapp.com",
  projectId: "techtask1",
  storageBucket: "techtask1.appspot.com",
  messagingSenderId: "490888516251",
  appId: "1:490888516251:web:c98fb0528cc99b89972c3e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("you are signed in user:", uid);
        navigate("/home", { replace: true });
      } else {
        navigate("/login", { replace: true });
        console.log("user logged out");
      }
    });
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
