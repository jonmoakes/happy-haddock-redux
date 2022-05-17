import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIndividualProduct } from "../../store/products/product.selector";
import {
  selectChosenSize,
  selectSizeSelectedPrice,
  selectSaltAndVinegar,
  selectGratedCheesePrice,
  selectDonerMeatPrice,
  selectCheeseSliceSelected,
  selectSaladSelected,
  selectSaucesSelected,
  selectSpecialInstructions,
  selectQuantity,
} from "../../store/final-item/final-item.selector";
import { clearFinalItem } from "../../store/final-item/final-item.action";
import { clearIndividualProduct } from "../../store/products/product.action";
import AddToOrderButton from "../add-to-order-button/add-to-order-button.component";

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

const AddItemToOrder = () => {
  const [nav, setNav] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const product = useSelector(selectIndividualProduct);
  const chosenSize = useSelector(selectChosenSize);
  const sizeSelectedPrice = useSelector(selectSizeSelectedPrice);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const gratedCheesePrice = useSelector(selectGratedCheesePrice);
  const donerMeatPrice = useSelector(selectDonerMeatPrice);
  const cheeseSliceSelected = useSelector(selectCheeseSliceSelected);
  const saladSelected = useSelector(selectSaladSelected);
  const saucesSelected = useSelector(selectSaucesSelected);
  const specialInstructions = useSelector(selectSpecialInstructions);
  const quantity = useSelector(selectQuantity);

  const { name, description, price } = product;
  const dispatch = useDispatch();
  const swal = withReactContent(Swal);

  const finalItem = {
    id: uuidv4(),
    name,
    description,
    price,
    chosenSize,
    sizeSelectedPrice,
    saltAndVinegar,
    gratedCheesePrice,
    donerMeatPrice,
    cheeseSliceSelected,
    saladSelected,
    saucesSelected,
    specialInstructions,
    quantity,
    selectedOptionsCombinedPrice:
      sizeSelectedPrice + gratedCheesePrice + donerMeatPrice,
  };

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

  function addItem() {
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

  return (
    <>
      {nav && <Navigate replace to={"/menu"} />}
      <AddToOrderButton onClick={addItem}>add to order</AddToOrderButton>
    </>
  );
};

export default AddItemToOrder;
