import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  errorSubmittingPaymentMessage,
  contactAppOwnerMessage,
  okMessage,
} from "../../strings/strings";

const usePaymentResultErrorSwal = () => {
  const swal = withReactContent(Swal);

  const paymentResultErrorSwal = (paymentResult) => {
    swal.fire({
      title: errorSubmittingPaymentMessage,
      text: `${paymentResult.error.message}\n${contactAppOwnerMessage}`,
      background: "black",
      backdrop: `
            rgba(0,0,123,0.8)`,
      icon: "error",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: okMessage,
      customClass: "confirm",
      allowOutsideClick: false,
      reverseButtons: true,
    });
  };

  return { paymentResultErrorSwal };
};

export default usePaymentResultErrorSwal;
