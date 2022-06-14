import { Link } from "react-router-dom";
import styled from "styled-components";

import { ErrorDiv } from "../../styles/form/form.styles";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const OrdersTableFetchError = ({ errorMessage }) => (
  <>
    {errorMessage === "" ? null : (
      <ErrorDiv className="table-error">
        <h2>sorry, there has been an Error.</h2>
        <p className="emoji"> &#128533;</p>
        <p>the error message is as follows:</p>
        <p>{errorMessage}</p>

        <h2>some things you can try:</h2>
        <ul>
          <li>Check Your Internet connection.</li>
          <li>reload the page and try again.</li>
          <li>
            you could also try clearing your browser cache
            <br />
            then reloading the page and trying again.
          </li>
        </ul>

        <p>
          please <StyledLink to="/contact">Contact Me</StyledLink> if the error
          persists!
        </p>
      </ErrorDiv>
    )}
  </>
);

export default OrdersTableFetchError;
