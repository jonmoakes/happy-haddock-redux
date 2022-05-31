import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { errorSendingMessage, okMessage } from "../../strings/strings";

import "../../styles/confirm.css";

const useInvalidEmailError = () => {
  const swal = withReactContent(Swal);

  const invalidEmailError = () => {
    swal.fire({
      title: errorSendingMessage,
      text: "you entered and invalid email address. please try again.",
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

  return { invalidEmailError };
};

export default useInvalidEmailError;
