import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useEmailAlreadyInUseSwal from "../../hooks/swals/use-email-already-in-use-swal";
import useWeakPasswordSwal from "../../hooks/swals/use-weak-password-swal";
import useGenericErrorSwal from "../../hooks/swals/use-genereic-error-swal";
import useDisplayNameTooLongSwal from "../../hooks/swals/use-display-name-too-long-swal";
import usePasswordsDontMatchSwal from "../../hooks/swals/use-passwords-dont-match-swal";

import { signUpStart, resetErrorMessage } from "../../store/user/user.action";
import {
  selectIsSignInLoading,
  selectUserError,
} from "../../store/user/user.selector";

import Loader from "../loader/loader.component";
import CustomButton from "../custom-button/custom-button.component";

import { Form, PageLink, SmallScreenDiv } from "../../styles/form/form.styles";

import { Div } from "../../styles/div/div.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { emailAlreadyInUseSwal } = useEmailAlreadyInUseSwal();
  const { weakPasswordSwal } = useWeakPasswordSwal();
  const { genericErrorSwal } = useGenericErrorSwal();
  const { displayNameTooLongSwal } = useDisplayNameTooLongSwal();
  const { passwordsDontMatchSwal } = usePasswordsDontMatchSwal();

  const isLoading = useSelector(selectIsSignInLoading);
  const error = useSelector(selectUserError);

  const dispatch = useDispatch();

  const { displayName, email, password, confirmPassword } = formFields;

  useEffect(() => {
    if (!error) return;
    if (error.code.includes("auth/email-already-in-use")) {
      emailAlreadyInUseSwal();
      dispatch(resetErrorMessage());
      resetFormFields();
      return;
    } else if (error.code.includes("weak-password")) {
      weakPasswordSwal();
      dispatch(resetErrorMessage());
    } else {
      genericErrorSwal(error);
      dispatch(resetErrorMessage());
      resetFormFields();
    }
  }, [
    error,
    emailAlreadyInUseSwal,
    weakPasswordSwal,
    genericErrorSwal,
    dispatch,
  ]);

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
      displayNameTooLongSwal();
      return;
    } else if (password !== confirmPassword) {
      passwordsDontMatchSwal();
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
