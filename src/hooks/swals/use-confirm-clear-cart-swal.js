import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useClearCartInFirestore from "../firestore/use-clear-cart-in-firestore";

import {
  clearCartQuestion,
  clearCartButtonText,
  cartClearedMessage,
  returningToMenuMessage,
  cancelledMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

const useConfirmClearCartSwal = () => {
  const { clearCartInFirestore } = useClearCartInFirestore();
  const swal = withReactContent(Swal);

  const confirmClearCartSwal = () => {
    swal
      .fire({
        title: clearCartQuestion,
        background: "black",
        backdrop: `
    rgba(0,0,123,0.8)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "red",
        confirmButtonText: clearCartButtonText,
        customClass: "confirm",
        allowOutsideClick: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal
            .fire({
              title: cartClearedMessage,
              text: returningToMenuMessage,
              timer: 2000,
              showConfirmButton: false,
              background: "black",
              backdrop: `
  rgba(0,0,123,0.8)`,
              icon: "success",
              customClass: "confirm",
            })
            .then(clearCartInFirestore());
        } else if (
          result.dismiss === Swal.DismissReason.cancel ||
          Swal.DismissReason.backdrop ||
          Swal.DismissReason.backdrop.esc
        ) {
          swal.fire({
            title: cancelledMessage,
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
  };

  return { confirmClearCartSwal };
};

export default useConfirmClearCartSwal;
