import { ErrorDiv } from "../../styles/form/form.styles";

const Errors = ({ warningMessage, checkoutErrorMessage }) => (
  <>
    {warningMessage ? (
      <ErrorDiv className="warning">
        <p>{warningMessage}</p>
      </ErrorDiv>
    ) : (
      checkoutErrorMessage && (
        <ErrorDiv>
          <p>{checkoutErrorMessage}</p>
        </ErrorDiv>
      )
    )}
  </>
);

export default Errors;
