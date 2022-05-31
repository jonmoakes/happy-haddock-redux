import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  errorSendingMessage,
  missingEmailFieldsErrorMessage,
  okMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

const useMissingEmailFieldsError = () => {
  const swal = withReactContent(Swal);

  const missingEmailFieldsError = () => {
    swal.fire({
      title: errorSendingMessage,
      text: missingEmailFieldsErrorMessage,
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

  return { missingEmailFieldsError };
};

export default useMissingEmailFieldsError;
