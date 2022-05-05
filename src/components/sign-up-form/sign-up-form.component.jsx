import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { signUpStart, resetErrorMessage } from "../../store/user/user.action";
import {
  selectIsSignInLoading,
  selectUserError,
} from "../../store/user/user.selector";

import Loader from "../loader/loader.component";
import CustomButton from "../custom-button/custom-button.component";

import { Form, PageLink, SmallScreenDiv } from "../../styles/form/form.styles";

import { Div } from "../../styles/div/div.styles";

import {
  okMessage,
  displayNameTooLongMessage,
  passwordsDontMatchMessage,
  emailAlreadyInUse,
  weakPassword,
} from "../../strings/strings";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const isLoading = useSelector(selectIsSignInLoading);
  const error = useSelector(selectUserError);

  const swal = withReactContent(Swal);
  const dispatch = useDispatch();

  const { displayName, email, password, confirmPassword } = formFields;

  useEffect(() => {
    if (!error) return;
    if (error.code.includes("auth/email-already-in-use")) {
      swal
        .fire({
          title: emailAlreadyInUse,
          background: "black",
          backdrop: `
  rgba(0,0,123,0.8)`,
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: `${okMessage}`,
          customClass: "confirm",
          allowOutsideClick: false,
        })
        .then(dispatch(resetErrorMessage()))
        .then(resetFormFields());
      return;
    } else if (error.code.includes("weak-password")) {
      swal
        .fire({
          title: weakPassword,
          background: "black",
          backdrop: `
  rgba(0,0,123,0.8)`,
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: `${okMessage}`,
          customClass: "confirm",
          allowOutsideClick: false,
        })
        .then(dispatch(resetErrorMessage()));
    } else {
      swal
        .fire({
          title: `${error.code}`,
          background: "black",
          backdrop: `
  rgba(0,0,123,0.8)`,
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: `${okMessage}`,
          customClass: "confirm",
          allowOutsideClick: true,
        })
        .then(dispatch(resetErrorMessage()))
        .then(resetFormFields());
    }
  }, [error, swal, dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (displayName.length > 8) {
      swal.fire({
        title: `${displayNameTooLongMessage}`,
        background: "black",
        backdrop: `
  rgba(0,0,123,0.8)`,
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: `${okMessage}`,
        customClass: "confirm",
        allowOutsideClick: false,
      });
      return;
    } else if (password !== confirmPassword) {
      swal.fire({
        title: `${passwordsDontMatchMessage}`,
        background: "black",
        backdrop: `
  rgba(0,0,123,0.8)`,
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: `${okMessage}`,
        customClass: "confirm",
        allowOutsideClick: false,
      });
      return;
    } else {
      dispatch(signUpStart(email, password, displayName));
    }
  };

  return (
    <Div>
      {isLoading && <Loader />}
      <h1>Don't Have An Acount?</h1>
      <p>sign up below! it's quick and secure!</p>

      <hr className="top" />

      <Form className="sign-in-up" onSubmit={handleSubmit}>
        <label>display name</label>
        <input
          type="text"
          name="displayName"
          value={displayName || ""}
          onChange={handleChange}
          placeholder="Max 8 Characters "
          required
        />

        <label>email</label>
        <input
          type="email"
          name="email"
          value={email || ""}
          onChange={handleChange}
          placeholder="Enter Your Email Address"
          required
        />

        <label>password</label>
        <input
          type="password"
          name="password"
          value={password || ""}
          onChange={handleChange}
          placeholder="Min 6 Characters"
          required
        />

        <label>confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword || ""}
          onChange={handleChange}
          placeholder="Confirm Your Password"
          required
        />

        <CustomButton className="sign-in-up">Sign Up</CustomButton>
      </Form>
      <SmallScreenDiv>
        <hr className="top" />
        <p>already have an account?</p>
        <PageLink to="/sign-in">Sign in!</PageLink>
        <hr className="bottom" />
      </SmallScreenDiv>
    </Div>
  );
};

export default SignUp;
