import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import useSetSearchField from "../../hooks/handlers/use-set-search-field";

import {
  selectProductsMap,
  selectProductsIsLoading,
  selectShowHelpText,
} from "../../store/products/product.selector";

import Loader from "../../components/loader/loader.component";
import MenuHelp from "../../components/menu-help/menu-help.component";
import SearchBar from "../../components/search-bar/search-bar.component";

import CategoryProductsToDisplay from "./category-products-to-display.component";

import { displayCategoryTitle } from "../../reusable-functions/title-conditionals";

import { TitleDiv } from "../../styles/product-item/product-item.styles";
import { Container } from "../../styles/container/container.styles";

const Category = () => {
  const [products, setProducts] = useState(null);
  const { searchField, resetSearchField, handleSearchFieldChange } =
    useSetSearchField();

  const productsMap = useSelector(selectProductsMap);
  const isLoading = useSelector(selectProductsIsLoading);
  const showHelpText = useSelector(selectShowHelpText);
  const { category } = useParams();

  useEffect(() => {
    setProducts(productsMap[category]);
  }, [category, productsMap, showHelpText]);

  return (
    <Container>
      {isLoading && <Loader />}

      <TitleDiv className="products">
        <h1>{displayCategoryTitle(category)}</h1>
      </TitleDiv>

      <MenuHelp {...{ searchField }} />

      {!showHelpText && (
        <>
          <SearchBar
            {...{ handleSearchFieldChange, resetSearchField, searchField }}
          />
          <CategoryProductsToDisplay
            {...{ searchField, products, resetSearchField }}
          />
        </>
      )}
    </Container>
  );
};

export default Category;
