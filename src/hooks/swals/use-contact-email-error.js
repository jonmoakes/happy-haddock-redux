import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { okMessage, errorSendingMessage } from "../../strings/strings";

import "../../styles/confirm.css";

const useContactEmailError = () => {
  const swal = withReactContent(Swal);

  const contactEmailError = (errorMessage) => {
    swal.fire({
      title: errorSendingMessage,
      text: `error message: ${errorMessage}`,
      background: "black",
      backdrop: `
rgba(0,0,123,0.8)`,
      icon: "error",
      confirmButtonColor: "#3085d6",
      confirmButtonText: `${okMessage}`,
      customClass: "confirm",
      allowOutsideClick: false,
    });
  };

  return { contactEmailError };
};

export default useContactEmailError;
