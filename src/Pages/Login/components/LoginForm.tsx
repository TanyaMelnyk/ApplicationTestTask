import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const LoginForm = ({ signUp = false }: { signUp?: boolean }) => {
  return (
    <div className="sign-up">
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>
            <img src="./../../../../assets/name_icon.png" alt="" />
            Name
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <img src="./../../../../assets/mail_icon.png" alt="" /> Email
          </Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        {signUp && (
          <>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <img src="./../../../../assets/lock_icon.png" alt="" />
                Password
              </Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>
                <img src="./../../../../assets/lock_icon.png" alt="" />
                Confirm Password
              </Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </>
        )}
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
