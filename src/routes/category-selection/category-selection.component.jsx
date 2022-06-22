import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import useSetSearchField from "../../hooks/handlers/use-set-search-field";

import {
  selectProductsMap,
  selectProductsIsLoading,
  selectShowHelpText,
} from "../../store/products/product.selector";

import Loader from "../../components/loader/loader.component";
import Welcome from "./welcome.component";
import MenuHelp from "../../components/menu-help/menu-help.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import ProductsToDisplay from "./products-to-display.component";

import { displayCategoryTitle } from "../../reusable-functions/title-conditionals";

import { TitleDiv } from "../../styles/product-item/product-item.styles";
import { Container } from "../../styles/container/container.styles";

const CategorySelection = () => {
  const [products, setProducts] = useState(null);
  const { searchField, resetSearchField, handleSearchFieldChange } =
    useSetSearchField();

  const productsMap = useSelector(selectProductsMap);
  const isLoading = useSelector(selectProductsIsLoading);
  const showHelpText = useSelector(selectShowHelpText);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(productsMap);
  }, [productsMap]);

  return (
    <Container>
      {isLoading && <Loader />}
      <Welcome {...{ searchField }} />

      <MenuHelp />

      {!showHelpText && (
        <>
          <SearchBar
            {...{ handleSearchFieldChange, resetSearchField, searchField }}
          />

          {!searchField &&
            Object.keys(productsMap).map((title) => (
              <Fragment key={title}>
                <TitleDiv
                  onClick={() => navigate(`${location.pathname}/${title}`)}
                >
                  <h1>view {displayCategoryTitle(title)}</h1>
                </TitleDiv>
              </Fragment>
            ))}

          {searchField && (
            <ProductsToDisplay
              {...{ searchField, products, resetSearchField }}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default CategorySelection;
