import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import usePasswordResetSuccessSwal from "../../hooks/swals/use-password-reset-success-swal";
import useEmailAddressNotFoundSwal from "../../hooks/swals/use-email-address-not-found-swal";
import useGenericErrorSwal from "../../hooks/swals/use-genereic-error-swal";

import Loader from "../loader/loader.component";
import CustomButton from "../custom-button/custom-button.component";

import { Form, ForgotPasswordSelectDiv } from "../../styles/form/form.styles";

const ForgotPasswordForm = ({
  emailForPasswordReset,
  resetFormFields,
  handleSignInFormChange,
}) => {
  const [passwordResetLoader, setPasswordResetLoader] = useState(false);
  const [showForgotPasswordField, setShowForgotPasswordField] = useState(false);
  const { passwordResetSuccessSwal } = usePasswordResetSuccessSwal();
  const { emailAddressNotFoundSwal } = useEmailAddressNotFoundSwal();
  const { genericErrorSwal } = useGenericErrorSwal();

  const auth = getAuth();
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
    <>
      {passwordResetLoader && <Loader />}
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
              onChange={handleSignInFormChange}
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
    </>
  );
};

export default ForgotPasswordForm;
