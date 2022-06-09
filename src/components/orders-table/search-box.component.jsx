import { useState } from "react";
import { useAsyncDebounce } from "react-table";

import Loader from "../loader/loader.component";

import { SearchBar } from "../styles/searchbar/searchbar.styles";

import { Div } from "../styles/div/div.styles";

import { ClearButtonDiv, Button } from "../styles/help-div/help-div.styles";

const SearchBox = ({
  chosenEntry,
  errorMessage,
  rows,
  data,
  filter,
  setFilter,
}) => {
  const [value, setValue] = useState(filter);
  const [isSearching, setIsSearching] = useState(false);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
    setIsSearching(false);
  }, 400);

  const clearSearch = () => {
    setValue("");
    setFilter(undefined);
  };

  return (
    <>
      {isSearching && <Loader />}
      {chosenEntry.length === 0 && errorMessage === "" && data.length !== 0 && (
        <Div>
          <SearchBar
            className="table-seach-bar"
            value={value || ""}
            type="search"
            onChange={(e) => {
              setIsSearching(true);
              setValue(e.target.value);
              onChange(e.target.value);
            }}
            placeholder="Search Entries"
          />
        </Div>
      )}

      {value !== "" &&
        rows.length === 0 &&
        errorMessage === "" &&
        data.length !== 0 && (
          <>
            <ClearButtonDiv className="table">
              <h2>no result found....</h2>
              <p>please refine your search query</p>
              <p>or</p>
              <p>tap the button below to show all entries again.</p>
              <Button onClick={clearSearch}>show all entries</Button>
            </ClearButtonDiv>
          </>
        )}
    </>
  );
};

export default SearchBox;
