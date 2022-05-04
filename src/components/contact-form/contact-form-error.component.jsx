import { ErrorDiv } from "../../styles/form/form.styles";

const ContactFormError = ({ errorMessage }) => (
  <>
    {errorMessage && (
      <ErrorDiv>
        <p>sorry, there was an error sending the form :(</p>
        <p>the error message received is below:</p>
        <p style={{ backgroundColor: "blue" }}>{errorMessage}</p>
        <p>please try again.</p>
      </ErrorDiv>
    )}
  </>
);

export default ContactFormError;
