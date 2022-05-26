import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import {
  selectProductsMap,
  selectProductsIsLoading,
} from "../../store/products/product.selector";

import Loader from "../../components/loader/loader.component";
import MenuWelcome from "../../components/menu-welcome/menu-welcome.component";

import { displayCategoryTitle } from "../../reusable-functions/title-conditionals";

import { TitleDiv } from "../../styles/product-item/product-item.styles";
import { Container } from "../../styles/container/container.styles";

const CategorySelection = () => {
  const productsMap = useSelector(selectProductsMap);
  const isLoading = useSelector(selectProductsIsLoading);

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      {isLoading && <Loader />}
      <MenuWelcome />

      {Object.keys(productsMap).map((title) => (
        <Fragment key={title}>
          <TitleDiv onClick={() => navigate(`${location.pathname}/${title}`)}>
            <h1>view {displayCategoryTitle(title)}</h1>
          </TitleDiv>
        </Fragment>
      ))}
    </Container>
  );
};

export default CategorySelection;
