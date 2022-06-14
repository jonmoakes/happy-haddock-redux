import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { errorClearingCartMessage, okMessage } from "../../strings/strings";

import "../../styles/confirm.css";

const useErrorClearingCartSwal = () => {
  const swal = withReactContent(Swal);

  const errorClearingCartSwal = (error) => {
    swal.fire({
      title: errorClearingCartMessage,
      text: `Error Received: ${error.message}`,
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

  return { errorClearingCartSwal };
};

export default useErrorClearingCartSwal;
