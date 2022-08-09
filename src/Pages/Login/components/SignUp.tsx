import React from "react";
import LoginForm from "./LoginForm";

const SignUp = () => {
  return (
    <div className="sign-up">
      <LoginForm signUp={true} />
    </div>
  );
};

export default SignUp;
