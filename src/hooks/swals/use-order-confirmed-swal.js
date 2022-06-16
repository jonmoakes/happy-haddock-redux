import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { selectCustomerDetails } from "../../store/cart/cart.selector";

import { okMessage } from "../../strings/strings";

const useOrderConfirmedSwal = () => {
  const customerDetails = useSelector(selectCustomerDetails);
  const { name, email } = customerDetails;
  const swal = withReactContent(Swal);

  const orderConfirmedSwal = () => {
    swal.fire({
      title: `thank you for your order ${name}`,
      text: `A Confirmation Email Has Been Sent To ${email}`,
      confirmButtonText: okMessage,
      confirmButtonColor: "#3085d6",
      allowOutsideClick: false,
      allowEscapeKey: false,
      background: "black",
      backdrop: `
rgba(0,0,123,0.8)`,
      icon: "success",
      customClass: "confirm",
    });
  };

  return { orderConfirmedSwal };
};

export default useOrderConfirmedSwal;
