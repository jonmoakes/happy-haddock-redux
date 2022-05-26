import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import useSetSearchField from "../../hooks/use-set-search-field";

import {
  selectProductsMap,
  selectProductsIsLoading,
  selectShowHelpText,
} from "../../store/products/product.selector";
import { setShowHelpText } from "../../store/products/product.action";

import Loader from "../../components/loader/loader.component";
import Titles from "./titles.component";
import ToggleMenuHelp from "../../components/toggle-menu-help/toggle-menu-help.component";
import NoSearchResult from "../../components/no-search-result/no-search-result.component";
import ProductsItem from "../../components/products-item/products-item.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { SearchBar } from "../../styles/searchbar/searchbar.styles";
import { Button } from "../../styles/help-div/help-div.styles";

const Category = () => {
  const { searchField, resetSearchField, handleSearchFieldChange } =
    useSetSearchField();
  const productsMap = useSelector(selectProductsMap);
  const { category } = useParams();
  const [products, setProducts] = useState(productsMap[category]);
  const isLoading = useSelector(selectProductsIsLoading);
  const showHelpText = useSelector(selectShowHelpText);
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(productsMap[category]);

    return () => {
      if (showHelpText) {
        dispatch(setShowHelpText(false));
      }
    };
  }, [category, productsMap, dispatch, showHelpText]);

  const filteredProducts = useMemo(
    () =>
      products &&
      products.filter((prod) =>
        prod.name.toLowerCase().includes(searchField.toLowerCase())
      ),
    [products, searchField]
  );

  return (
    <Container>
      <Titles {...{ category }} />
      <ToggleMenuHelp />

      <SearchBar
        type="search"
        placeholder="Search Products"
        onChange={handleSearchFieldChange}
        value={"" || searchField}
      />

      {isLoading && <Loader />}

      <Div className="products-div">
        {!searchField ? (
          <>
            {products &&
              products.map((product) => (
                <ProductsItem key={product.id} product={product} />
              ))}
          </>
        ) : searchField && filteredProducts.length ? (
          filteredProducts.map((product) => (
            <ProductsItem key={product.id} product={product} />
          ))
        ) : (
          <>
            <NoSearchResult />
            <Button onClick={resetSearchField}>clear search field</Button>
          </>
        )}
      </Div>
    </Container>
  );
};

export default Category;
