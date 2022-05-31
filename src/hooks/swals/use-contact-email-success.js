import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  successMessage,
  emailResponseTimeMessage,
  okMessage,
} from "../../strings/strings";

const useContactEmailSuccess = () => {
  const swal = withReactContent(Swal);
  const contactEmailSuccess = () => {
    swal.fire({
      title: successMessage,
      text: emailResponseTimeMessage,
      background: "black",
      backdrop: `
            rgba(0,0,123,0.8)`,
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: `${okMessage}`,
      customClass: "confirm",
      allowOutsideClick: false,
    });
  };

  return { contactEmailSuccess };
};

export default useContactEmailSuccess;
