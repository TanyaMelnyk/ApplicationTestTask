import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Home } from "./Pages";
import { Login } from "./Pages";
import "./style.scss";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { useAppDispatch } from "./hooks";
import { updateUserId } from "./Authorization/model";
import { app } from "./Network/firabase.config";

export const firebaseAuth = getAuth(app);

const App = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(updateUserId(uid));
        navigate("/home", { replace: true });
      } else {
        navigate("/login", { replace: true });
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
