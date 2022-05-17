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
import ChooseSalad from "../../components/options/choose-salad.component";
import ChooseSauces from "../../components/options/choose-sauces/choose-sauces.component";
import ChooseSaltAndVinegar from "../../components/options/choose-salt-and-vinegar.component";
import ChooseSpecialInstructions from "../../components/options/choose-special-instructions.component";
import ChooseQuantity from "../../components/options/choose-quantity.component";
import AddItemToOrder from "../../components/add-item-to-order/add-item-to-order.component";

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
          <ChooseSaltAndVinegar />
          <ChooseGratedCheese />
          <ChooseDonerMeat />
          <ChooseCheeseSlice />
          <ChooseSalad />
          <ChooseSauces />
          <ChooseSpecialInstructions />
          <ChooseQuantity />
          <AddItemToOrder />
        </ProductItemDiv>
      ) : (
        redirect && <Navigate to="/menu" replace />
      )}
    </Container>
  );
};

export default IndividualProductPage;
