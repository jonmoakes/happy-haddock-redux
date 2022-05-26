import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import useSetSearchField from "../../hooks/use-set-search-field";

import {
  selectProductsMap,
  selectProductsIsLoading,
  selectShowHelpText,
} from "../../store/products/product.selector";
import { setShowHelpText } from "../../store/products/product.action";

import Loader from "../../components/loader/loader.component";
import MenuWelcome from "../../components/menu-welcome/menu-welcome.component";
import ToggleMenuHelp from "../../components/toggle-menu-help/toggle-menu-help.component";
import CompleteMenuProductsToDisplay from "./complete-menu-products-to-display.component";

import { Container } from "../../styles/container/container.styles";
import { SearchBar } from "../../styles/searchbar/searchbar.styles";

const CompleteMenu = () => {
  const { searchField, resetSearchField, handleSearchFieldChange } =
    useSetSearchField();

  const productsMap = useSelector(selectProductsMap);
  const [products, setProducts] = useState(productsMap);
  const isLoading = useSelector(selectProductsIsLoading);
  const showHelpText = useSelector(selectShowHelpText);
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(productsMap);

    return () => {
      if (showHelpText) {
        dispatch(setShowHelpText(false));
      }
    };
  }, [productsMap, dispatch, showHelpText]);

  return (
    <Container>
      {isLoading && <Loader />}
      <MenuWelcome />
      <ToggleMenuHelp />

      <SearchBar
        type="search"
        placeholder="Search Products..."
        onChange={handleSearchFieldChange}
        value={"" || searchField}
      />

      <CompleteMenuProductsToDisplay
        {...{ searchField, products, resetSearchField }}
      />
    </Container>
  );
};

export default CompleteMenu;
