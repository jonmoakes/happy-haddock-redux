import {
  SearchDiv,
  SearchBarInput,
} from "../../styles/searchbar-input/searchbar-input.styles";
import { Button } from "../../styles/help-div/help-div.styles";

const SearchBar = ({
  handleSearchFieldChange,
  resetSearchField,
  searchField,
}) => (
  <SearchDiv>
    {searchField && (
      <>
        <hr />
        <span>clear the search bar to show all categories again</span>
        <Button className="clear-search" onClick={resetSearchField}>
          clear search bar
        </Button>
      </>
    )}

    <hr />
    <SearchBarInput
      type="search"
      placeholder="Search Products..."
      onChange={handleSearchFieldChange}
      value={"" || searchField}
    />
    <hr />
  </SearchDiv>
);

export default SearchBar;
