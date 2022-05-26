import {
  CheckoutPageHeader,
  HeaderBlock,
  HeadingText,
} from "./checkout.styles";

const CheckoutHeaderBlock = () => (
  <CheckoutPageHeader>
    <HeaderBlock>
      <HeadingText>Name</HeadingText>
    </HeaderBlock>

    <HeaderBlock>
      <HeadingText>Quantity</HeadingText>
    </HeaderBlock>

    <HeaderBlock>
      <HeadingText>Price</HeadingText>
    </HeaderBlock>
  </CheckoutPageHeader>
);

export default CheckoutHeaderBlock;
