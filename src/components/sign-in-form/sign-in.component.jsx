import { useDispatch } from "react-redux";

import useHandleSignInFormError from "../../hooks/use-handle-sign-in-form-error";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import CustomButton from "../custom-button/custom-button.component";

import { Form } from "../../styles/form/form.styles";

const SignIn = ({
  email,
  password,
  resetFormFields,
  handleSignInFormChange,
}) => {
  useHandleSignInFormError(resetFormFields);
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    await dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await dispatch(emailSignInStart(email, password));
    } catch (error) {
      resetFormFields();
      return;
    }
  };

  return (
    <Form className="sign-in-up" onSubmit={handleSubmit}>
      <label>email</label>
      <input
        name="email"
        type="email"
        onChange={handleSignInFormChange}
        placeholder="Enter Your Email"
        value={email || ""}
        required
      />

      <label>password</label>
      <input
        style={{ marginBottom: "-10px" }}
        name="password"
        type="password"
        onChange={handleSignInFormChange}
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
  );
};

export default SignIn;
