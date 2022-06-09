import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { noNetworkDetected, okMessage } from "../../strings/strings";

const useNetworkErrorSwal = () => {
  const swal = withReactContent(Swal);
  const networkErrorSwal = () => {
    swal.fire({
      title: noNetworkDetected,
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

  return { networkErrorSwal };
};

export default useNetworkErrorSwal;
