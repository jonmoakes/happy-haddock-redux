import useConfirmClearCartSwal from "../../hooks/swals/use-confirm-clear-cart-swal";

import { ClearCartDiv, ClearCartButton } from "./checkout.styles";
import "../../styles/confirm.css";

const CheckoutClearCart = () => {
  const { confirmClearCartSwal } = useConfirmClearCartSwal();

  return (
    <ClearCartDiv>
      <ClearCartButton onClick={confirmClearCartSwal}>
        clear cart
      </ClearCartButton>
    </ClearCartDiv>
  );
};

export default CheckoutClearCart;
