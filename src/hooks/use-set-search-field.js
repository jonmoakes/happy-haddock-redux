import { useState } from "react";

const useSetSearchField = () => {
  const [searchField, setSearchField] = useState("");

  const handleSearchFieldChange = (e) => {
    setSearchField(e.target.value);
  };

  const resetSearchField = () => {
    setSearchField("");
  };

  return { searchField, resetSearchField, handleSearchFieldChange };
};

export default useSetSearchField;
