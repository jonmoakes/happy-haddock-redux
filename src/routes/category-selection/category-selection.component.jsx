import { Fragment } from "react";
import { useSelector } from "react-redux";

import {
  selectProductsMap,
  selectProductsIsLoading,
} from "../../store/products/product.selector";

import Loader from "../../components/loader/loader.component";
import CategoryTitles from "./category-titles.component";

import { Container } from "../../styles/container/container.styles";

import { HelpDiv } from "../../styles/help-div/help-div.styles";

const CategorySelection = () => {
  const productsMap = useSelector(selectProductsMap);
  const isLoading = useSelector(selectProductsIsLoading);

  return (
    <Container>
      <HelpDiv>
        <h1>our menu</h1>
        <p>tap on any category to view its products</p>
      </HelpDiv>

      {isLoading && <Loader />}

      {Object.keys(productsMap).map((title) => (
        <Fragment key={title}>
          <CategoryTitles {...{ title }} />
        </Fragment>
      ))}
    </Container>
  );
};

export default CategorySelection;
