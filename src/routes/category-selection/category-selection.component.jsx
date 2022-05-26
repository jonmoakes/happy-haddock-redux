import { Fragment } from "react";
import { useSelector } from "react-redux";

import {
  selectProductsMap,
  selectProductsIsLoading,
} from "../../store/products/product.selector";

import Loader from "../../components/loader/loader.component";
import MenuWelcome from "../../components/menu-welcome/menu-welcome.component";
import CategoryTitles from "./category-titles.component";

import { Container } from "../../styles/container/container.styles";

const CategorySelection = () => {
  const productsMap = useSelector(selectProductsMap);
  const isLoading = useSelector(selectProductsIsLoading);

  return (
    <Container>
      {isLoading && <Loader />}
      <MenuWelcome />

      {Object.keys(productsMap).map((title) => (
        <Fragment key={title}>
          <CategoryTitles {...{ title }} />
        </Fragment>
      ))}
    </Container>
  );
};

export default CategorySelection;
