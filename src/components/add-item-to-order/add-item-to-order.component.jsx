import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
// import { selectFinalItem } from "../../redux/item/item.selectors";
// import { selectCurrentUser } from "../../redux/user/user.selectors";

// import { firestore } from "../../firebase/firebase.utils";

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

/* 
This component gets the finalItem that was dispatched in the coresponding option component - ie beefBurgerOptions.
It is passed to the cart reducer in the cartItems array for use in the checkout flow.
*/
const AddItemToOrder = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const swal = withReactContent(Swal);
  const dispatch = useDispatch();
  // const finalItem = useSelector(selectFinalItem);
  // const currentUser = useSelector(selectCurrentUser);

  // async function addItemToFirestore() {
  //   const userRef = await firestore.doc(`users/${currentUser.id}`);
  //   try {
  //     userRef.get().then((doc) => {
  //       if (doc.exists) {
  //         const { cartItems } = doc.data();
  //         userRef.update({
  //           cartItems: [...cartItems, finalItem],
  //         });
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
            .then(addProductToCart());
          // .then(addItemToFirestore())
          // .then(dispatch({ type: "CLEAR_ITEM" }))
          // .then(dispatch({ type: "CLEAR_SELECTED_CHECKBOX" }));
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
      <AddToOrderButton onClick={addItem}>add to order</AddToOrderButton>
    </>
  );
};

export default AddItemToOrder;
