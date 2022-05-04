import { StripeLogoDiv, StripeLogo } from "./checkout.styles";

const CheckoutStripeInfo = () => (
  <StripeLogoDiv>
    <p style={{ fontStyle: "italic" }}>Checkout Powered By</p>
    <StripeLogo />
  </StripeLogoDiv>
);

export default CheckoutStripeInfo;
