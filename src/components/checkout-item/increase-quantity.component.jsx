import useConfirmIncreaseQuantitySwal from "../../hooks/swals/use-confirm-increase-quantity-swal";
import useUpdateItemsInFirestore from "../../hooks/firestore/use-update-cart-items-in-firestore";

import { AddArrow } from "./checkout-item.styles";

const IncreaseQuantity = ({ cartItem }) => {
  const { confirmIncreaseQuantitySwal } = useConfirmIncreaseQuantitySwal();
  const { updateCartItemInFirestore } = useUpdateItemsInFirestore();

  updateCartItemInFirestore();

  return (
    <>
      <AddArrow onClick={() => confirmIncreaseQuantitySwal(cartItem)}>
        &#10095;
      </AddArrow>
    </>
  );
};

export default IncreaseQuantity;
