import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  areYouSureYouWishToOrderMessage,
  confirmPlaceOrderMessage,
  orderNotPlacedMessage,
  okMessage,
  cancelledMessage,
} from "../../strings/strings";

const useConfirmPaymentSwal = () => {
  const swal = withReactContent(Swal);
  const confirmPaymentSwal = (paymentHandler, cardElement) => {
    swal
      .fire({
        title: areYouSureYouWishToOrderMessage,
        background: "black",
        backdrop: `
    rgba(0,0,123,0.8)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "red",
        confirmButtonText: confirmPlaceOrderMessage,
        customClass: "confirm",
        allowOutsideClick: false,
        allowEscapeKey: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          paymentHandler();
        } else if (
          result.dismiss === Swal.DismissReason.cancel ||
          Swal.DismissReason.backdrop ||
          Swal.DismissReason.backdrop.esc
        ) {
          swal.fire({
            title: cancelledMessage,
            allowOutsideClick: false,
            allowEscapeKey: false,
            text: orderNotPlacedMessage,
            confirmButtonText: okMessage,
            confirmButtonColor: "#3085d6",
            background: "black",
            backdrop: `
    rgba(0,0,123,0.8)`,
            icon: "info",
            customClass: "confirm",
          });
        }
      });
  };

  return { confirmPaymentSwal };
};

export default useConfirmPaymentSwal;
