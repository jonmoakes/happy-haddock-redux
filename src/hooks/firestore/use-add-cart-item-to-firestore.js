import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import useGetFinalItem from "../use-get-final-item";

import { clearFinalItem } from "../../store/final-item/final-item.action";
import { clearIndividualProduct } from "../../store/products/product.action";
import { selectCurrentUser } from "../../store/user/user.selector";

import {
  confirmAddToCartMessage,
  itemAddedMessage,
  itemNotAddedToCartMessage,
  areYouSureMessage,
  cancelledMessage,
  okMessage,
  goToCartWhenReadyMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

const useAddCartItemsToFirestore = () => {
  const { finalItem } = useGetFinalItem();
  const [nav, setNav] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const swal = withReactContent(Swal);

  const addCartItemToFirestore = async () => {
    const userRef = doc(db, "users", currentUser.id);
    const userSnapshot = await getDoc(userRef);

    try {
      if (!userSnapshot.exists) return;
      const data = userSnapshot.data();
      const { cartItems } = data;
      await updateDoc(userRef, {
        cartItems: [...cartItems, finalItem],
      });
    } catch (error) {
      console.log(error);
    }
  };

  function confirmAddItem() {
    swal
      .fire({
        title: `${areYouSureMessage}`,
        background: "black",
        backdrop: `
    rgba(0,0,123,0.8)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "red",
        confirmButtonText: `${confirmAddToCartMessage}`,
        customClass: "confirm",
        allowOutsideClick: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal
            .fire({
              title: `${itemAddedMessage}`,
              text: `${goToCartWhenReadyMessage}`,
              confirmButtonText: `${okMessage}`,
              confirmButtonColor: "#3085d6",
              background: "black",
              backdrop: `
  rgba(0,0,123,0.8)`,
              icon: "success",
              customClass: "confirm",
            })
            .then(addCartItemToFirestore())
            .then(dispatch(clearFinalItem()))
            .then(dispatch(clearIndividualProduct()))
            .then(setNav(true));
        } else if (
          result.dismiss === Swal.DismissReason.cancel ||
          Swal.DismissReason.backdrop ||
          Swal.DismissReason.backdrop.esc
        ) {
          swal.fire({
            title: `${cancelledMessage}`,
            text: `${itemNotAddedToCartMessage}`,
            timer: 2000,
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

  return { nav, confirmAddItem };
};

export default useAddCartItemsToFirestore;
