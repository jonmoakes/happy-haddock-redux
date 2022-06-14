import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { decreaseItemQuantity } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  confirmDecreaseQuantityMessage,
  yesMessage,
  successMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

const useConfirmDecreaseQuantitySwal = () => {
  const cartItems = useSelector(selectCartItems);
  const swal = withReactContent(Swal);
  const dispatch = useDispatch();

  const confirmDecreaseQuantitySwal = (cartItem) => {
    swal
      .fire({
        title: confirmDecreaseQuantityMessage,
        background: "black",
        backdrop: `
  rgba(0,0,123,0.8)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "red",
        confirmButtonText: yesMessage,
        customClass: "confirm",
        allowOutsideClick: true,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal
            .fire({
              title: successMessage,
              showConfirmButton: false,
              timer: 1000,
              background: "black",
              backdrop: `
rgba(0,0,123,0.8)`,
              icon: "success",
              customClass: "confirm",
            })
            .then(dispatch(decreaseItemQuantity(cartItems, cartItem)));
        }
      });
  };

  return { confirmDecreaseQuantitySwal };
};

export default useConfirmDecreaseQuantitySwal;
