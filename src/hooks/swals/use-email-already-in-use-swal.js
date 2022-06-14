import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { emailAlreadyInUse, okMessage } from "../../strings/strings";

const useEmailAlreadyInUseSwal = () => {
  const swal = withReactContent(Swal);

  const emailAlreadyInUseSwal = (error) => {
    swal.fire({
      title: emailAlreadyInUse,
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

  return { emailAlreadyInUseSwal };
};

export default useEmailAlreadyInUseSwal;
