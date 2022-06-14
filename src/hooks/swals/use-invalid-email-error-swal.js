import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  errorSendingMessage,
  okMessage,
  invalidEmailErrorMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

const useInvalidEmailErrorSwal = () => {
  const swal = withReactContent(Swal);

  const invalidEmailErrorSwal = () => {
    swal.fire({
      title: errorSendingMessage,
      text: invalidEmailErrorMessage,
      background: "black",
      backdrop: `
rgba(0,0,123,0.8)`,
      icon: "error",
      confirmButtonColor: "#3085d6",
      confirmButtonText: okMessage,
      customClass: "confirm",
      allowOutsideClick: false,
    });
  };

  return { invalidEmailErrorSwal };
};

export default useInvalidEmailErrorSwal;
