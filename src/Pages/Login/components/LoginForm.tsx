import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "../../../App";
import { updateUserId } from "../../../Authorization/model";
import { useAppDispatch } from "../../../hooks";

const ErrorMessage = ({ message }: { message: string }) => {
  return <div className="error">{message}</div>;
};

const LoginForm = ({ signUp = false }: { signUp?: boolean }) => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const onSignInClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    signInWithEmailAndPassword(firebaseAuth, form.email, form.password).catch(
      (error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      }
    );
  };

  const onSignUpClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (form.confirmPassword === form.password) {
      setError("");

      createUserWithEmailAndPassword(firebaseAuth, form.email, form.password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(updateUserId(user.uid));
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      setError("Passwords dont match");
    }
  };

  return (
    <div className="sign-up">
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <img src="./../../../../assets/mail_icon.png" alt="" /> Email
          </Form.Label>
          <Form.Control
            onChange={(e) => onChange(e)}
            name="email"
            type="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <img src="./../../../../assets/lock_icon.png" alt="" />
            Password
          </Form.Label>
          <Form.Control
            onChange={(e) => onChange(e)}
            name="password"
            type="password"
          />
          {error && !signUp && <ErrorMessage message={error} />}
        </Form.Group>
        {signUp && (
          <>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>
                <img src="./../../../../assets/lock_icon.png" alt="" />
                Confirm Password
              </Form.Label>
              <Form.Control
                onChange={(e) => onChange(e)}
                name="confirmPassword"
                type="password"
              />
            </Form.Group>
            {error && <ErrorMessage message={error} />}
          </>
        )}
        {signUp ? (
          <Button
            onClick={(e) => onSignUpClick(e)}
            variant="primary"
            type="submit"
          >
            Sign Up
          </Button>
        ) : (
          <Button
            onClick={(e) => onSignInClick(e)}
            variant="primary"
            type="submit"
          >
            Sign In
          </Button>
        )}
      </Form>
    </div>
  );
};

export default LoginForm;
