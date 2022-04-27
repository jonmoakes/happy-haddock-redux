import { useState, useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
// import { useDispatch, useSelector } from "react-redux";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import {
  auth,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

// import {
//   selectError,
//   selectEmailAddress,
// } from "../../redux/user/user.selectors";

// import Loader from "../../components/loader/loader.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import {
  Form,
  ForgotPasswordSelectDiv,
  PageLink,
  SmallScreenDiv,
} from "../../styles/form/form.styles";

// import {
//   okMessage,
//   passwordResetSuccessMessage,
//   passwordResetSuccessText,
// } from "../../strings/strings";

import "../../styles/confirm.css";

const SignIn = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef);
      }
    }
    fetchData();
  }, []);

  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
    emailForPasswordReset: "",
  });
  const [showForgotPasswordField, setShowForgotPasswordField] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const { email, password, emailForPasswordReset } = userCredentials;
  // const dispatch = useDispatch();
  // const swal = withReactContent(Swal);
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
    setCredentials({ ...userCredentials, [name]: value });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   dispatch({
  //     type: "EMAIL_SIGN_IN_START",
  //     payload: { email, password },
  //   });
  // };

  // const handleSubmitForPasswordReset = async (event) => {
  //   event.preventDefault();
  //   const emailAddress = emailForPasswordReset;

  //   dispatch({
  //     type: "RESET_PASSWORD_START",
  //     payload: emailAddress,
  //   });
  // };

  return (
    <Container>
      <Div>
        {/* {isLoading && <Loader />} */}

        <h1>sign in</h1>
        <p>Please Sign in with your email and password.</p>

        <hr className="top" />

        <Form className="sign-in-up">
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
            <Form
              className="sign-in-up"
              // onSubmit={handleSubmitForPasswordReset}
            >
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
    </Container>
  );
};

export default SignIn;
