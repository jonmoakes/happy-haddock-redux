import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import {
  googleSignInStart,
  emailSignInStart,
  resetErrorMessage,
} from "../../store/user/user.action";

import { selectShowHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.selector";
import { hideHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.action";

import {
  selectIsSignInLoading,
  selectUserError,
} from "../../store/user/user.selector";

import Loader from "../loader/loader.component";
import CustomButton from "../custom-button/custom-button.component";

import { Div } from "../../styles/div/div.styles";

import {
  Form,
  ForgotPasswordSelectDiv,
  PageLink,
  SmallScreenDiv,
} from "../../styles/form/form.styles";

import {
  okMessage,
  passwordResetSuccessMessage,
  passwordResetSuccessText,
  errorSigningInTitle,
  errorSigningInText,
  emailAddressNotFound,
  noNetworkDetected,
  networkRequestFailedError,
} from "../../strings/strings";

import "../../styles/confirm.css";

const defaultFormFields = {
  email: "",
  password: "",
  emailForPasswordReset: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [passwordResetLoader, setPasswordResetLoader] = useState(false);
  const [showForgotPasswordField, setShowForgotPasswordField] = useState(false);

  const isLoading = useSelector(selectIsSignInLoading);
  const error = useSelector(selectUserError);
  const showHamburgerMenu = useSelector(selectShowHamburgerMenu);

  const dispatch = useDispatch();
  const swal = withReactContent(Swal);
  const auth = getAuth();
  const { email, password, emailForPasswordReset } = formFields;

  useEffect(() => {
    if (error && error.code.includes(networkRequestFailedError)) {
      swal
        .fire({
          title: noNetworkDetected,
          background: "black",
          backdrop: `
    rgba(0,0,123,0.8)`,
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: `${okMessage}`,
          customClass: "confirm",
          allowOutsideClick: true,
        })
        .then(dispatch(resetErrorMessage()));
    } else if (error && !error.code.includes(networkRequestFailedError)) {
      resetFormFields();
      swal
        .fire({
          title: errorSigningInTitle,
          text: errorSigningInText,
          background: "black",
          backdrop: `
    rgba(0,0,123,0.8)`,
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: `${okMessage}`,
          customClass: "confirm",
          allowOutsideClick: true,
        })
        .then(dispatch(resetErrorMessage()));
    }
  }, [error, swal, dispatch]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    if (showHamburgerMenu) {
      dispatch(hideHamburgerMenu());
    }
    await dispatch(googleSignInStart());
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (showHamburgerMenu) {
        dispatch(hideHamburgerMenu());
      }
      await dispatch(emailSignInStart(email, password));
    } catch (error) {
      swal.fire({
        title: errorSigningInTitle,
        text: errorSigningInText,
        background: "black",
        backdrop: `
     rgba(0,0,123,0.8)`,
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: `${okMessage}`,
        customClass: "confirm",
        allowOutsideClick: false,
      });
      resetFormFields();
      return;
    }
  };

  const handlePasswordResetSubmit = async (event) => {
    event.preventDefault();

    const email = emailForPasswordReset;
    setPasswordResetLoader(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setPasswordResetLoader(false);
        swal
          .fire({
            title: passwordResetSuccessMessage,
            text: passwordResetSuccessText,
            background: "black",
            backdrop: `
      rgba(0,0,123,0.8)`,
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: `${okMessage}`,
            customClass: "confirm",
            allowOutsideClick: false,
          })
          .then(resetFormFields());
      })
      .catch((error) => {
        setPasswordResetLoader(false);
        if (error.code.includes("auth/user-not-found")) {
          swal
            .fire({
              title: emailAddressNotFound,
              background: "black",
              backdrop: `
      rgba(0,0,123,0.8)`,
              icon: "error",
              confirmButtonColor: "#3085d6",
              confirmButtonText: `${okMessage}`,
              customClass: "confirm",
              allowOutsideClick: true,
            })
            .then(resetFormFields());
        } else {
          swal
            .fire({
              title: error.code,
              text: error.message,
              background: "black",
              backdrop: `
      rgba(0,0,123,0.8)`,
              icon: "error",
              confirmButtonColor: "#3085d6",
              confirmButtonText: `${okMessage}`,
              customClass: "confirm",
              allowOutsideClick: true,
            })
            .then(resetFormFields());
        }
      });
  };

  return (
    <Div>
      {(isLoading || passwordResetLoader) && <Loader />}

      <h1>sign in</h1>
      <p>Please Sign in with your email and password.</p>

      <hr className="top" />

      <Form className="sign-in-up" onSubmit={handleSubmit}>
        <label>email</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Enter Your Email"
          value={email || ""}
          required
        />

        <label>password</label>
        <input
          style={{ marginBottom: "-10px" }}
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Enter Your Password"
          value={password || ""}
          required
        />

        <div>
          <CustomButton className="sign-in-up" type="submit">
            Sign In
          </CustomButton>

          <p>or </p>

          <CustomButton
            type="button"
            className="google-button"
            onClick={signInWithGoogle}
          >
            Sign In with google
          </CustomButton>
        </div>
      </Form>

      <SmallScreenDiv>
        <hr className="top" />
        <p>no account yet?</p>
        <PageLink to="/sign-up">Sign up!</PageLink>
        <hr className="bottom" />
      </SmallScreenDiv>

      <ForgotPasswordSelectDiv>
        {!showForgotPasswordField && (
          <CustomButton
            className="forgot-password"
            onClick={() => setShowForgotPasswordField(true)}
          >
            Forgot Password?
          </CustomButton>
        )}

        {showForgotPasswordField && (
          <Form className="sign-in-up" onSubmit={handlePasswordResetSubmit}>
            <label className="forgot-password">
              enter your email & then click "reset password."
            </label>
            <input
              className="reset-pass-input"
              name="emailForPasswordReset"
              type="email"
              onChange={handleChange}
              placeholder="Please Enter Your Email"
              value={emailForPasswordReset || ""}
              required
            />
            <CustomButton className="forgot-password" type="submit">
              Reset Password
            </CustomButton>
          </Form>
        )}
      </ForgotPasswordSelectDiv>
    </Div>
  );
};

export default SignInForm;
