import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  itemAddedMessage,
  goToCartWhenReadyMessage,
  okMessage,
} from "../../strings/strings";

const useItemAddedSuccessSwal = () => {
  const swal = withReactContent(Swal);

  const itemAddedSuccessSwal = () => {
    swal.fire({
      title: `${itemAddedMessage}`,
      text: `${goToCartWhenReadyMessage}`,
      confirmButtonText: `${okMessage}`,
      confirmButtonColor: "#3085d6",
      background: "black",
      backdrop: `
              rgba(0,0,123,0.8)`,
      icon: "success",
      customClass: "confirm",
    });
  };

  return { itemAddedSuccessSwal };
};

export default useItemAddedSuccessSwal;
