import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";

import {
  TotalPriceDiv,
  TotalPriceHeading,
  PriceNumber,
} from "./checkout.styles";

const CheckoutTotalPriceInfo = () => {
  const totalPrice = useSelector(selectCartTotal);

  return (
    <TotalPriceDiv>
      <TotalPriceHeading>GRAND TOTAL TO PAY:</TotalPriceHeading>
      <PriceNumber>
        £{(Math.round(totalPrice * 100) / 100).toFixed(2)}
      </PriceNumber>
    </TotalPriceDiv>
  );
};
export default CheckoutTotalPriceInfo;
