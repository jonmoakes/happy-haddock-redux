import { ErrorDiv } from "../../styles/form/form.styles";

const Errors = ({ warning, error }) => (
  <>
    {warning ? (
      <ErrorDiv className="warning">
        <p>{warning}</p>
      </ErrorDiv>
    ) : (
      error && (
        <ErrorDiv>
          <p>{error}</p>
        </ErrorDiv>
      )
    )}
  </>
);

export default Errors;
