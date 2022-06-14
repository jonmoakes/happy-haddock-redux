import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

import {
  confimGoBackMessage,
  resetOptionsMessage,
  goBack,
} from "../../strings/strings";

const useConfirmGoBackSwal = () => {
  const swal = withReactContent(Swal);
  const navigate = useNavigate();

  const confirmGoBackSwal = (paymentHandler, cardElement) => {
    swal
      .fire({
        title: confimGoBackMessage,
        text: resetOptionsMessage,
        background: "black",
        backdrop: `
    rgba(0,0,123,0.8)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "red",
        confirmButtonText: goBack,
        customClass: "confirm",
        allowOutsideClick: false,
        allowEscapeKey: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate(-2);
        }
      });
  };

  return { confirmGoBackSwal };
};

export default useConfirmGoBackSwal;
