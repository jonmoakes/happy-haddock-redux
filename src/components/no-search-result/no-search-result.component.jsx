import { NoSearchResultDiv } from "../../styles/help-div/help-div.styles";

const NoSearchResult = () => (
  <NoSearchResultDiv>
    <h2>no result found....</h2>
    <p>please refine your search query</p>
    <p>or</p>
    <p>tap the button below clear the search field.</p>
  </NoSearchResultDiv>
);

export default NoSearchResult;
