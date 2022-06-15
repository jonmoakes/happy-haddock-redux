import { useDispatch } from "react-redux";

import useHandleSignUpFormError from "../../hooks/use-handle-sign-up-form-error";
import useDisplayNameTooLongSwal from "../../hooks/swals/use-display-name-too-long-swal";
import usePasswordsDontMatchSwal from "../../hooks/swals/use-passwords-dont-match-swal";

import { signUpStart } from "../../store/user/user.action";

import CustomButton from "../custom-button/custom-button.component";

import { Form } from "../../styles/form/form.styles";

const SignUp = ({ handleSignUpFormChange, resetFormFields, formFields }) => {
  const { displayNameTooLongSwal } = useDisplayNameTooLongSwal();
  const { passwordsDontMatchSwal } = usePasswordsDontMatchSwal();
  useHandleSignUpFormError(resetFormFields);

  const dispatch = useDispatch();
  const { displayName, email, password, confirmPassword } = formFields;

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
    <Form className="sign-in-up" onSubmit={handleSubmit}>
      <label>display name</label>
      <input
        type="text"
        name="displayName"
        value={displayName || ""}
        onChange={handleSignUpFormChange}
        placeholder="Max 8 Characters "
        required
      />

      <label>email</label>
      <input
        type="email"
        name="email"
        value={email || ""}
        onChange={handleSignUpFormChange}
        placeholder="Enter Your Email Address"
        required
      />

      <label>password</label>
      <input
        type="password"
        name="password"
        value={password || ""}
        onChange={handleSignUpFormChange}
        placeholder="Min 6 Characters"
        required
      />

      <label>confirm password</label>
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword || ""}
        onChange={handleSignUpFormChange}
        placeholder="Confirm Your Password"
        required
      />

      <CustomButton className="sign-in-up">Sign Up</CustomButton>
    </Form>
  );
};

export default SignUp;
