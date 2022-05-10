import { errorMessage } from "../../strings/options-strings";

const PhoneNumberErrorMessage = () => (
  <p className={errorMessage}>
    <span className="up-arrow">&uarr;</span> phone number must be 11 digits
    long.
  </p>
);

export default PhoneNumberErrorMessage;
