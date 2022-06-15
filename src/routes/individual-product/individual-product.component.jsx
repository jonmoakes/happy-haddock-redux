import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectIndividualProduct } from "../../store/products/product.selector";

import RequiredInfoText from "./required-info-text.component";
import ProductCombinedOptions from "./product-combined-options.component";
import PriceInfo from "./price-info.component";
import ProductTotalInfo from "./product-total-info.component";
import AddToOrderButton from "../../components/add-to-order-button/add-to-order-button.component";

import { productExistsCheck } from "../../reusable-functions/product-exists-check";

import {
  ProductItemDiv,
  Name,
  Description,
  BasePrice,
  Price,
} from "../../styles/product-item/product-item.styles";
import { Container } from "../../styles/container/container.styles";
import { RequiredInfoDiv } from "../../styles/options-form/options-form.styles";

const IndividualProductPage = () => {
  const [redirect, setRedirect] = useState(false);
  const product = useSelector(selectIndividualProduct);

  const { name, description, price } = product;

  useEffect(() => {
    if (!Object.keys(product).length) {
      setRedirect(true);
    }
  }, [product]);

  return (
    <>
      {redirect && <Navigate replace to={"/menu"} />}
      <Container>
        <RequiredInfoDiv>
          <h1>choose your options</h1>
          <RequiredInfoText />
          <PriceInfo />
        </RequiredInfoDiv>

        {productExistsCheck(name, description, price) && (
          <ProductItemDiv>
            <p>you have selected:</p>
            <Name>{name}</Name>
            {description && <Description>{description}</Description>}
            <BasePrice>base price:</BasePrice>
            <Price>£{price.toFixed(2)}</Price>
            <ProductCombinedOptions />
            <ProductTotalInfo />
            <AddToOrderButton />
          </ProductItemDiv>
        )}
      </Container>
    </>
  );
};

export default IndividualProductPage;
