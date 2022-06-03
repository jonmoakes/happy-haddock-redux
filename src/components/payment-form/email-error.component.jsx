import { ErrorDiv } from "./payment-form.styles";
const EmailError = ({ email }) => (
  <>
    {email && (
      <ErrorDiv>
        <span className="up-arrow">
          &uarr; &uarr;
          <br />
        </span>
        <span className="error-message">
          please enter a valid email address.
        </span>
      </ErrorDiv>
    )}
  </>
);

export default EmailError;
