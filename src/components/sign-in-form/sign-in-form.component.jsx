import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import useNetworkErrorSwal from "../../hooks/swals/use-network-error-swal";
import useErrorSigningInSwal from "../../hooks/swals/use-error-signing-in-swal";
import usePasswordResetSuccessSwal from "../../hooks/swals/use-password-reset-success-swal";
import useEmailAddressNotFoundSwal from "../../hooks/swals/use-email-address-not-found-swal";
import useGenericErrorSwal from "../../hooks/swals/use-genereic-error-swal";

import {
  googleSignInStart,
  emailSignInStart,
  resetErrorMessage,
} from "../../store/user/user.action";

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

import { networkRequestFailedError } from "../../strings/strings";

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

  const { networkErrorSwal } = useNetworkErrorSwal();
  const { errorSigningInSwal } = useErrorSigningInSwal();
  const { passwordResetSuccessSwal } = usePasswordResetSuccessSwal();
  const { emailAddressNotFoundSwal } = useEmailAddressNotFoundSwal();
  const { genericErrorSwal } = useGenericErrorSwal();

  const isLoading = useSelector(selectIsSignInLoading);
  const error = useSelector(selectUserError);

  const dispatch = useDispatch();

  const auth = getAuth();
  const { email, password, emailForPasswordReset } = formFields;

  useEffect(() => {
    if (error && error.code.includes(networkRequestFailedError)) {
      networkErrorSwal();
      dispatch(resetErrorMessage());
    } else if (error && !error.code.includes(networkRequestFailedError)) {
      resetFormFields();
      errorSigningInSwal();
      dispatch(resetErrorMessage());
    }
  }, [error, errorSigningInSwal, networkErrorSwal, dispatch]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await dispatch(googleSignInStart());
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await dispatch(emailSignInStart(email, password));
    } catch (error) {
      errorSigningInSwal();
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
        passwordResetSuccessSwal();
        resetFormFields();
      })
      .catch((error) => {
        setPasswordResetLoader(false);
        if (error.code.includes("auth/user-not-found")) {
          emailAddressNotFoundSwal();
          resetFormFields();
        } else {
          genericErrorSwal(error);
          resetFormFields();
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
