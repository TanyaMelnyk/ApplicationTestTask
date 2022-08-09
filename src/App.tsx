import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home, Settings } from "./Pages";
import { Login } from "./Pages";
import "./style.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
