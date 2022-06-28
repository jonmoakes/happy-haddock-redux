import useConfirmIncreaseQuantitySwal from "../../hooks/swals/use-confirm-increase-quantity-swal";

import { AddArrow } from "./checkout-item.styles";

const IncreaseQuantity = ({ cartItem }) => {
  const { confirmIncreaseQuantitySwal } = useConfirmIncreaseQuantitySwal();

  return (
    <>
      <AddArrow onClick={() => confirmIncreaseQuantitySwal(cartItem)}>
        &#10095;
      </AddArrow>
    </>
  );
};

export default IncreaseQuantity;
