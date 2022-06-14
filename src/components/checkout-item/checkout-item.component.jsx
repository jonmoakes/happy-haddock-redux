import CheckoutItemProductInfo from "./checkout-item-product-info.component";
import IncreaseQuantity from "./increase-quantity.component";
import DecreaseQuantity from "./decrease-quantity.component";

import {
  CheckoutItemContainer,
  CheckoutItemText,
  ArrowContainer,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { quantity, price, selectedOptionsCombinedPrice } = cartItem;
  const itemSinglePrice = (price + selectedOptionsCombinedPrice) * quantity;

  return (
    <CheckoutItemContainer>
      <CheckoutItemProductInfo {...{ cartItem }} />
      <ArrowContainer>
        <DecreaseQuantity {...{ cartItem }} />
        <Value>{quantity}</Value>
        <IncreaseQuantity {...{ cartItem }} />
      </ArrowContainer>
      <CheckoutItemText>
        £{((Number(itemSinglePrice) * 100) / 100).toFixed(2)}
      </CheckoutItemText>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
