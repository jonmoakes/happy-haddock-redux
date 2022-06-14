import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { displayNameTooLongMessage, okMessage } from "../../strings/strings";

const useDisplayNameTooLongSwal = () => {
  const swal = withReactContent(Swal);

  const displayNameTooLongSwal = (error) => {
    swal.fire({
      title: displayNameTooLongMessage,
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

  return { displayNameTooLongSwal };
};

export default useDisplayNameTooLongSwal;
