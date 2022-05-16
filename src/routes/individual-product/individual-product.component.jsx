import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectIndividualProduct } from "../../store/products/product.selector";

import RequiredInfoText from "./required-info-text/required-info-text.component";
import PriceInfo from "./price-info/price-info.component";
import ChooseSize from "../../components/options/choose-size.component";
import ChooseGratedCheese from "../../components/options/choose-grated-cheese.component";
import ChooseDonerMeat from "../../components/options/choose-doner-meat.component";
import ChooseCheeseSlice from "../../components/options/choose-cheese-slice.component";

import {
  ProductItemDiv,
  Name,
  Description,
  Price,
} from "../../styles/product-item/product-item.styles";
import { Container } from "../../styles/container/container.styles";
import { RequiredInfoDiv } from "../../styles/options-form/options-form.styles";

const IndividualProductPage = () => {
  const [redirect, setRedirect] = useState(false);
  const product = useSelector(selectIndividualProduct);
  const { name, description, price } = product;

  useEffect(() => {
    if (Object.keys(product).length === 0) {
      setRedirect(true);
    }
  }, [product]);

  return (
    <Container>
      <RequiredInfoDiv>
        <h1>choose your options</h1>
        <RequiredInfoText />
        <PriceInfo />
      </RequiredInfoDiv>

      {name !== undefined &&
      description !== undefined &&
      price !== undefined ? (
        <ProductItemDiv>
          <p>you have selected:</p>
          <Name>{name}</Name>
          {description && <Description>{description}</Description>}
          <Price>£{price.toFixed(2)}</Price>
          <ChooseSize />
          <ChooseGratedCheese />
          <ChooseDonerMeat />
          <ChooseCheeseSlice />
          {/* <AddToOrderButton onClick={addToOrder}>add to order</AddToOrderButton> */}
        </ProductItemDiv>
      ) : (
        redirect && <Navigate to="/menu" replace />
      )}
    </Container>
  );
};

export default IndividualProductPage;
