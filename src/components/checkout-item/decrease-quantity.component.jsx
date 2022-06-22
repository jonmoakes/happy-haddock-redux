import useConfirmDecreaseQuantitySwal from "../../hooks/swals/use-confirm-decrease-quantity-swal";
import useUpdateItemsInFirestore from "../../hooks/firestore/use-update-cart-items-in-firestore";

import { MinusArrow } from "./checkout-item.styles";

const DecreaseQuantity = ({ cartItem }) => {
  const { confirmDecreaseQuantitySwal } = useConfirmDecreaseQuantitySwal();
  const { updateCartItemInFirestore } = useUpdateItemsInFirestore();

  updateCartItemInFirestore();

  return (
    <>
      <MinusArrow onClick={() => confirmDecreaseQuantitySwal(cartItem)}>
        &#10095;
      </MinusArrow>
    </>
  );
};

export default DecreaseQuantity;
