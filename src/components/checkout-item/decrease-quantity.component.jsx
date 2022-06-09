import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useUpdateItemsInFirestore from "../../hooks/firestore/use-update-cart-items-in-firestore";

import { decreaseItemQuantity } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import { MinusArrow } from "./checkout-item.styles";

import {
  confirmDecreaseQuantityMessage,
  yesMessage,
  successMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

const DecreaseQuantity = ({ cartItem }) => {
  const { updateCartItemInFirestore } = useUpdateItemsInFirestore();

  const cartItems = useSelector(selectCartItems);
  const swal = withReactContent(Swal);
  const dispatch = useDispatch();

  const removeItemHandler = () =>
    dispatch(decreaseItemQuantity(cartItems, cartItem));

  useEffect(() => {
    updateCartItemInFirestore();
  }, [updateCartItemInFirestore]);

  function confirmDecreaseQuantity() {
    swal
      .fire({
        title: `${confirmDecreaseQuantityMessage}`,
        background: "black",
        backdrop: `
    rgba(0,0,123,0.8)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "red",
        confirmButtonText: `${yesMessage}`,
        customClass: "confirm",
        allowOutsideClick: true,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal
            .fire({
              title: `${successMessage}`,
              showConfirmButton: false,
              timer: 1000,
              background: "black",
              backdrop: `
  rgba(0,0,123,0.8)`,
              icon: "success",
              customClass: "confirm",
            })
            .then(removeItemHandler());
        }
      });
  }

  return (
    <>
      <MinusArrow onClick={confirmDecreaseQuantity}>&#10095;</MinusArrow>
    </>
  );
};

export default DecreaseQuantity;
