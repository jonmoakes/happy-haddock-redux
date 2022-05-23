import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import useAddCartItemsToFirestore from "../../hooks/use-add-cart-item-to-firestore";
import { selectIndividualProduct } from "../../store/products/product.selector";

import RequiredInfoText from "./required-info-text/required-info-text.component";
import PriceInfo from "./price-info/price-info.component";
import ChooseSize from "../../components/options/choose-size.component";
import ChooseType from "../../components/options/choose-type.component";
import ChooseGratedCheese from "../../components/options/choose-grated-cheese.component";
import ChooseDonerMeat from "../../components/options/choose-doner-meat.component";
import ChooseCheeseSlice from "../../components/options/choose-cheese-slice.component";
import ChooseSalad from "../../components/options/choose-salad.component";
import ChooseSauces from "../../components/options/choose-sauces/choose-sauces.component";
import ChoosePie from "../../components/options/choose-pie.component";
import ChooseSaltAndVinegar from "../../components/options/choose-salt-and-vinegar.component";
import ChooseSpecialInstructionsAndQuantity from "../../components/options/choose-special-instructions-and-quantity.component";
import ChooseCans from "../../components/options/choose-cans.component";
import ChooseBottles from "../../components/options/choose-bottles.component";
import ChooseSingleCondiment from "../../components/options/choose-single-condiment.component";
import ChooseTwoCondiments from "../../components/options/choose-two-condiments/choose-two-condiments.component";
import ChooseConeOfChipsSauce from "../../components/options/choose-cone-of-chips-sauce.component";
import ChooseOneMeat from "../../components/options/choose-one-meat.component";
import ChooseTwoMeats from "../../components/options/choose-two-meats/choose-two-meats.component";
import AddToOrderButton from "../../components/add-to-order-button/add-to-order-button.component";

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
  const { nav, confirmAddItem } = useAddCartItemsToFirestore();

  const product = useSelector(selectIndividualProduct);
  const { name, description, price } = product;

  useEffect(() => {
    if (Object.keys(product).length === 0) {
      setRedirect(true);
    }
  }, [product]);

  return (
    <>
      {(nav || redirect) && <Navigate replace to={"/menu"} />}
      <Container>
        <RequiredInfoDiv>
          <h1>choose your options</h1>
          <RequiredInfoText />
          <PriceInfo />
        </RequiredInfoDiv>

        {name !== undefined &&
          description !== undefined &&
          price !== undefined && (
            <ProductItemDiv>
              <p>you have selected:</p>
              <Name>{name}</Name>
              {description && <Description>{description}</Description>}
              <Price>£{price.toFixed(2)}</Price>
              <ChooseSize />
              <ChooseType />
              <ChoosePie />
              <ChooseSaltAndVinegar />
              <ChooseGratedCheese />
              <ChooseDonerMeat />
              <ChooseCheeseSlice />
              <ChooseSalad />
              <ChooseSauces />
              <ChooseCans />
              <ChooseBottles />
              <ChooseSingleCondiment />
              <ChooseTwoCondiments />
              <ChooseConeOfChipsSauce />
              <ChooseOneMeat />
              <ChooseTwoMeats />
              <ChooseSpecialInstructionsAndQuantity />
              <AddToOrderButton onClick={confirmAddItem}>
                add to order
              </AddToOrderButton>
            </ProductItemDiv>
          )}
      </Container>
    </>
  );
};

export default IndividualProductPage;
