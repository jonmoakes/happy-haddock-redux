import {
  CheckoutPageHeader,
  HeaderBlock,
  HeadingText,
  MinorText,
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
      <HeadingText>
        Price <MinorText>( Each )</MinorText>
      </HeadingText>
    </HeaderBlock>
  </CheckoutPageHeader>
);

export default CheckoutHeaderBlock;
