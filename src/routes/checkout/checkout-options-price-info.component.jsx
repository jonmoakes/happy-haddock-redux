import { PaddedDiv } from "./checkout.styles";
const CheckoutOptionsPriceInfo = () => (
  <PaddedDiv>
    <p className="price-info">
      the price for each item listed is
      <br />( base product price &#43; any selected options ) &times; quantity
    </p>
  </PaddedDiv>
);

export default CheckoutOptionsPriceInfo;
