import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { passwordsDontMatchMessage, okMessage } from "../../strings/strings";

const usePasswordsDontMatchSwal = () => {
  const swal = withReactContent(Swal);

  const passwordsDontMatchSwal = (error) => {
    swal.fire({
      title: `${passwordsDontMatchMessage}`,
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

  return { passwordsDontMatchSwal };
};

export default usePasswordsDontMatchSwal;
