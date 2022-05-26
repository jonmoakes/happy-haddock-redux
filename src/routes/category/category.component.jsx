import { useState, useEffect } from "react";
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
import ToggleMenuHelp from "../../components/toggle-menu-help/toggle-menu-help.component";

import CategoryProductsToDisplay from "./category-products-to-display.component";

import { displayCategoryTitle } from "../../reusable-functions/title-conditionals";

import { TitleDiv } from "../../styles/product-item/product-item.styles";
import { Container } from "../../styles/container/container.styles";
import { SearchBar } from "../../styles/searchbar/searchbar.styles";

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

  return (
    <Container>
      <TitleDiv className="products">
        <h1>{displayCategoryTitle(category)}</h1>
      </TitleDiv>

      <ToggleMenuHelp />

      <SearchBar
        type="search"
        placeholder="Search Products"
        onChange={handleSearchFieldChange}
        value={"" || searchField}
      />

      {isLoading && <Loader />}

      <CategoryProductsToDisplay
        {...{ searchField, products, resetSearchField }}
      />
    </Container>
  );
};

export default Category;
