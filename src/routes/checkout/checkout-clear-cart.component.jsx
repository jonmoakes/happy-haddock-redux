import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { clearCartItems } from "../../store/cart/cart.action";
import { selectCurrentUser } from "../../store/user/user.selector";

import {
  clearCartQuestion,
  clearCartButtonText,
  cartClearedMessage,
  returningToMenuMessage,
  cancelledMessage,
} from "../../strings/strings";

import { ClearCartDiv, ClearCartButton } from "./checkout.styles";
import "../../styles/confirm.css";

const CheckoutClearCart = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const swal = withReactContent(Swal);

  const clearCartItemsFromFirestore = async () => {
    const userRef = doc(db, "users", currentUser.id);
    const userSnapshot = await getDoc(userRef);

    try {
      if (!userSnapshot.exists) return;
      await updateDoc(userRef, {
        cartItems: [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  function confirmClearCart() {
    swal
      .fire({
        title: `${clearCartQuestion}`,
        background: "black",
        backdrop: `
    rgba(0,0,123,0.8)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "red",
        confirmButtonText: `${clearCartButtonText}`,
        customClass: "confirm",
        allowOutsideClick: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal
            .fire({
              title: `${cartClearedMessage}`,
              text: `${returningToMenuMessage}`,
              timer: 2000,
              showConfirmButton: false,
              background: "black",
              backdrop: `
  rgba(0,0,123,0.8)`,
              icon: "success",
              customClass: "confirm",
            })
            .then(clearCartItemsFromFirestore())
            .then(dispatch(clearCartItems()));
        } else if (
          result.dismiss === Swal.DismissReason.cancel ||
          Swal.DismissReason.backdrop ||
          Swal.DismissReason.backdrop.esc
        ) {
          swal.fire({
            title: `${cancelledMessage}`,
            timer: 1500,
            showConfirmButton: false,
            background: "black",
            backdrop: `
  rgba(0,0,123,0.8)`,
            icon: "info",
            customClass: "confirm",
          });
        }
      });
  }

  return (
    <ClearCartDiv>
      <ClearCartButton onClick={confirmClearCart}>clear cart</ClearCartButton>
    </ClearCartDiv>
  );
};

export default CheckoutClearCart;
