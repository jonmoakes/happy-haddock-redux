import CheckoutItemProductInfo from "./checkout-item-product-info.component";
import IncreaseQuantity from "./increase-quantity.component";
import DecreaseQuantity from "./decrease-quantity.component";

import {
  CheckoutItemContainer,
  Text,
  ArrowContainer,
  Value,
} from "./checkout-item.styles";

// This component renders the section of the checkout page that includes each items information.
// It gets the cartItem from the checkout page.
const CheckoutItem = ({ cartItem }) => {
  const { quantity, price } = cartItem;

  return (
    <CheckoutItemContainer>
      <CheckoutItemProductInfo cartItem={cartItem} />
      <ArrowContainer>
        <DecreaseQuantity cartItem={cartItem} />
        <Value>{quantity}</Value>
        <IncreaseQuantity cartItem={cartItem} />
      </ArrowContainer>

      <Text>£{((Number(price) * 100) / 100).toFixed(2)}</Text>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
