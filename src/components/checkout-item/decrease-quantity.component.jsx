import useConfirmDecreaseQuantitySwal from "../../hooks/swals/use-confirm-decrease-quantity-swal";

import { MinusArrow } from "./checkout-item.styles";

const DecreaseQuantity = ({ cartItem }) => {
  const { confirmDecreaseQuantitySwal } = useConfirmDecreaseQuantitySwal();

  return (
    <>
      <MinusArrow onClick={() => confirmDecreaseQuantitySwal(cartItem)}>
        &#10095;
      </MinusArrow>
    </>
  );
};

export default DecreaseQuantity;
