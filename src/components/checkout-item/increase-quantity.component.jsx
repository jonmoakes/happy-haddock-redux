import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { increaseQuantityByOneToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import { AddArrow } from "./checkout-item.styles";

import {
  confirmIncreaseQuantityMessage,
  yesMessage,
  successMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

const IncreaseQuantity = ({ cartItem }) => {
  const swal = withReactContent(Swal);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  // const currentUser = useSelector(selectCurrentUser);

  const addItemHandler = () =>
    dispatch(increaseQuantityByOneToCart(cartItems, cartItem));

  // useEffect(() => {
  //   async function updateCartItemsFirestore() {
  //     const userRef = await firestore.doc(`users/${currentUser.id}`);
  //     try {
  //       userRef.get().then((doc) => {
  //         if (doc.exists) {
  //           userRef.update({
  //             cartItems: cartItems,
  //           });
  //         }
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   updateCartItemsFirestore();
  // }, [cartItems, currentUser.id]);

  function confirmIncreaseQuantity() {
    swal
      .fire({
        title: `${confirmIncreaseQuantityMessage}`,
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
            .then(addItemHandler());
        }
      });
  }

  return (
    <>
      <AddArrow onClick={confirmIncreaseQuantity}>&#10095;</AddArrow>
    </>
  );
};

export default IncreaseQuantity;
