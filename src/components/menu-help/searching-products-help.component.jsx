import {
  Text,
  Span,
} from "../../styles/bounce-in-down-div/bounce-in-down-div.styles";

const SearchingProductsHelp = () => (
  <>
    <h2>searching products:</h2>
    <Text>
      you can type a search query in the box below to filter products.
    </Text>
    <Text>if there is no match found, you can:</Text>
    <Text>refine your search text to try again</Text>
    <Text>or</Text>
    <Text>
      tap the <Span className="clear-button-text">Clear search field</Span>{" "}
      button to show all of the categories again.
    </Text>
    <hr />
  </>
);

export default SearchingProductsHelp;
