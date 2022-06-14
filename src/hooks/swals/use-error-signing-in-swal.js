import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  errorSigningInTitle,
  errorSigningInText,
  okMessage,
} from "../../strings/strings";

const useErrorSigningInSwal = () => {
  const swal = withReactContent(Swal);

  const errorSigningInSwal = () => {
    swal.fire({
      title: errorSigningInTitle,
      text: errorSigningInText,
      background: "black",
      backdrop: `
    rgba(0,0,123,0.8)`,
      icon: "error",
      confirmButtonColor: "#3085d6",
      confirmButtonText: okMessage,
      customClass: "confirm",
      allowOutsideClick: true,
    });
  };

  return { errorSigningInSwal };
};

export default useErrorSigningInSwal;
