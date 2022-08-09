import React from "react";
import "./style.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const Login = () => {
  return (
    <div className="login-page">
      <img alt='logo' src="./../../../assets/BT_Logo%204.png" />
      <div className="login-block">
        <Tabs
          defaultActiveKey="signUp"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="signIn" title="Sign In">
            <SignIn />
          </Tab>
          <Tab eventKey="signUp" title="Sign Up">
            <SignUp />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
