import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { weakPassword, okMessage } from "../../strings/strings";

const useWeakPasswordSwal = () => {
  const swal = withReactContent(Swal);

  const weakPasswordSwal = (error) => {
    swal.fire({
      title: weakPassword,
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

  return { weakPasswordSwal };
};

export default useWeakPasswordSwal;
