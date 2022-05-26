import { useState, useEffect, useMemo } from "react";
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
import ProductsItem from "../../components/products-item/products-item.component";
import NoSearchResult from "../../components/no-search-result/no-search-result.component";

import { filteredProductsEmptyCheck } from "../../reusable-functions/is-filtered-products-empty-check";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { SearchBar } from "../../styles/searchbar/searchbar.styles";
import { Button } from "../../styles/help-div/help-div.styles";

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

  const filteredProducts = useMemo(
    () =>
      products &&
      Object.values(products).map((items) =>
        items.filter((item) =>
          item.name.toLowerCase().includes(searchField.toLowerCase())
        )
      ),
    [products, searchField]
  );

  return (
    <Container>
      {isLoading && <Loader />}
      <MenuWelcome />
      <ToggleMenuHelp />

      <SearchBar
        type="search"
        placeholder="Search Products"
        onChange={handleSearchFieldChange}
        value={"" || searchField}
      />

      <Div className="products-div">
        {!searchField ? (
          <>
            {Object.values(products).map((items) => {
              return items.map((product) => (
                <ProductsItem key={product.id} {...{ product }} />
              ));
            })}
          </>
        ) : searchField && !filteredProductsEmptyCheck(filteredProducts) ? (
          <>
            {filteredProducts &&
              Object.values(filteredProducts).map((items) => {
                return items.map((product) => (
                  <ProductsItem key={product.id} {...{ product }} />
                ));
              })}
          </>
        ) : (
          searchField &&
          filteredProductsEmptyCheck(filteredProducts) && (
            <>
              <NoSearchResult />
              <Button onClick={resetSearchField}>clear search field</Button>
            </>
          )
        )}
      </Div>
    </Container>
  );
};

export default CompleteMenu;
