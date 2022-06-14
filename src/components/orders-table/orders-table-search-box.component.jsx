import { useState } from "react";
import { useAsyncDebounce } from "react-table";

import Loader from "../loader/loader.component";

import { SearchBarInput } from "../../styles/searchbar-input/searchbar-input.styles";

import { Div } from "../../styles/div/div.styles";

import { ClearButtonDiv, Button } from "../../styles/help-div/help-div.styles";

const OrdersTableSearchBox = ({
  chosenEntry,
  rows,
  data,
  globalFilter,
  setGlobalFilter,
}) => {
  const [value, setValue] = useState(globalFilter);
  const [isSearching, setIsSearching] = useState(false);

  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
    setIsSearching(false);
  }, 400);

  const clearSearch = () => {
    setValue("");
    setGlobalFilter(undefined);
  };

  return (
    <>
      {isSearching && <Loader />}
      {chosenEntry.length === 0 && !!data.length && (
        <Div>
          <SearchBarInput
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

      {value !== "" && rows.length === 0 && data.length !== 0 && (
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

export default OrdersTableSearchBox;
