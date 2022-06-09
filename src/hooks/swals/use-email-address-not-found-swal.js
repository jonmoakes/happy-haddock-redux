import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { emailAddressNotFound, okMessage } from "../../strings/strings";

const useEmailAddressNotFoundSwal = () => {
  const swal = withReactContent(Swal);

  const emailAddressNotFoundSwal = () => {
    swal.fire({
      title: emailAddressNotFound,
      background: "black",
      backdrop: `
      rgba(0,0,123,0.8)`,
      icon: "error",
      confirmButtonColor: "#3085d6",
      confirmButtonText: `${okMessage}`,
      customClass: "confirm",
      allowOutsideClick: true,
    });
  };

  return { emailAddressNotFoundSwal };
};

export default useEmailAddressNotFoundSwal;
