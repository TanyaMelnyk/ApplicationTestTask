import React from "react";
import { Navigate } from "react-router-dom";
import { firebaseAuth } from "../App";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  return firebaseAuth.currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
