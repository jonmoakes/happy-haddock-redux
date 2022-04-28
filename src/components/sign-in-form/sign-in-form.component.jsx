import { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import {
  getRedirectResult,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  auth,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   selectError,
//   selectEmailAddress,
// } from "../../redux/user/user.selectors";

import { UserContext } from "../../contexts/user.context";

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
} from "../../strings/strings";

import "../../styles/confirm.css";

const defaultFormFields = {
  email: "",
  password: "",
  emailForPasswordReset: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [showForgotPasswordField, setShowForgotPasswordField] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    async function getGoogleSignInResult() {
      const response = await getRedirectResult(auth);
      if (!response) return;
      setIsLoading(true);
      await createUserDocumentFromAuth(response.user);
      setCurrentUser(response.user);
      setIsLoading(false);
    }
    getGoogleSignInResult();
  }, [setCurrentUser]);

  const { email, password, emailForPasswordReset } = formFields;
  const swal = withReactContent(Swal);
  const authFromFirebase = getAuth();
  // const navigate = useNavigate();

  // const dispatch = useDispatch();
  // const error = useSelector(selectError);
  // const emailAddress = useSelector(selectEmailAddress);

  //login or password reset  error
  // useEffect(() => {
  //   if (error) {
  //     setIsLoading(false);
  //     swal
  //       .fire({
  //         title: `${error}`,
  //         background: "black",
  //         backdrop: `
  //   rgba(0,0,123,0.8)`,
  //         icon: "error",
  //         confirmButtonColor: "#3085d6",
  //         confirmButtonText: `${okMessage}`,
  //         customClass: "confirm",
  //         allowOutsideClick: true,
  //       })
  //       .then(dispatch({ type: "RESET_ERROR_MESSAGE" }))
  //       .then((result) => {
  //         if (result.isConfirmed || result.isDismissed) {
  //           setCredentials({
  //             email: "",
  //             password: "",
  //             emailForPasswordReset: "",
  //           });
  //         }
  //       });
  //   }
  // }, [error, swal, dispatch]);

  // password reset success
  // useEffect(() => {
  //   if (emailAddress) {
  //     setIsLoading(false);
  //     swal
  //       .fire({
  //         title: `${passwordResetSuccessMessage}`,
  //         text: `${passwordResetSuccessText}`,
  //         background: "black",
  //         backdrop: `
  //   rgba(0,0,123,0.8)`,
  //         icon: "success",
  //         confirmButtonColor: "#3085d6",
  //         confirmButtonText: `${okMessage}`,
  //         customClass: "confirm",
  //         allowOutsideClick: true,
  //       })
  //       .then(dispatch({ type: "RESET_EMAIL_ADDRESS" }))
  //       .then((result) => {
  //         if (result.isConfirmed || result.isDismissed) {
  //           setCredentials({
  //             emailForPasswordReset: "",
  //           });
  //         }
  //       });
  //   }
  // }, [emailAddress, swal, dispatch]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setIsLoading(false);
      resetFormFields();
      // navigate("/menu");
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
      setIsLoading(false);
      return;
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   dispatch({
  //     type: "EMAIL_SIGN_IN_START",
  //     payload: { email, password },
  //   });
  // };

  const handlePasswordResetSubmit = async (event) => {
    event.preventDefault();

    sendPasswordResetEmail(authFromFirebase, emailForPasswordReset)
      .then(() => {
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
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/user-not-found") {
          swal.fire({
            title: emailAddressNotFound,
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
        } else {
          swal.fire({
            title: errorCode,
            text: errorMessage,
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
        }
      });
  };

  // const handleSubmitForPasswordReset = async (event) => {
  //   event.preventDefault();
  //   const emailAddress = emailForPasswordReset;

  //   dispatch({
  //     type: "RESET_PASSWORD_START",
  //     payload: emailAddress,
  //   });
  // };

  return (
    <Div>
      {isLoading && <Loader />}

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
            onClick={signInWithGoogleRedirect}
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
