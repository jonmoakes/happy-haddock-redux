import { Link } from "react-router-dom";
import styled from "styled-components";

import { ErrorDiv } from "../styles/form/form.styles";

const ErrorList = styled.li`
  color: black;
`;

const TableSnapshotError = () => (
  <ErrorDiv>
    <h2>Error:</h2>
    <p>couldn't find table data.</p>
    <p>please try the following:</p>
    <ul>
      <ErrorList>check that you have a working internet connection.</ErrorList>
      <ErrorList>reload the page and try again.</ErrorList>
      <ErrorList>
        please <Link to="/contact">Contact Me</Link> if the error persists.
      </ErrorList>
    </ul>
  </ErrorDiv>
);

export default TableSnapshotError;
