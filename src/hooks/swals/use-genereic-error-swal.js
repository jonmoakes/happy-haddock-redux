import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { okMessage } from "../../strings/strings";

const useGenericErrorSwal = () => {
  const swal = withReactContent(Swal);

  const genericErrorSwal = (error) => {
    swal.fire({
      title: error.code,
      text: error.message,
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

  return { genericErrorSwal };
};

export default useGenericErrorSwal;
