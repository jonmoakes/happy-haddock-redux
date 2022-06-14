import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  passwordResetSuccessMessage,
  passwordResetSuccessText,
  okMessage,
} from "../../strings/strings";

const usePasswordResetSuccessSwal = () => {
  const swal = withReactContent(Swal);

  const passwordResetSuccessSwal = () => {
    swal.fire({
      title: passwordResetSuccessMessage,
      text: passwordResetSuccessText,
      background: "black",
      backdrop: `
rgba(0,0,123,0.8)`,
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: okMessage,
      customClass: "confirm",
      allowOutsideClick: false,
    });
  };

  return { passwordResetSuccessSwal };
};

export default usePasswordResetSuccessSwal;
