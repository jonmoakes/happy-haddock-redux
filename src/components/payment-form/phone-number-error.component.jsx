import { ErrorDiv } from "./payment-form.styles";

const PhoneNumberError = () => (
  <ErrorDiv>
    <span className="up-arrow">
      &uarr; &uarr;
      <br />
    </span>
    <span className="error-message">phone number must be 11 digits long.</span>
  </ErrorDiv>
);

export default PhoneNumberError;
