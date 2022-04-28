import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  areYouSureMessage,
  forwardToCheckoutMessage,
  goToCheckoutMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

import {
  Wrapper,
  ShoppingIcon,
  HappyFaceIcon,
  IconsDiv,
} from "./cart-icon.styles";

const ProductsPageCartIcon = () => {
  const swal = withReactContent(Swal);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  function showCheckoutPageSwal() {
    swal
      .fire({
        title: `${areYouSureMessage}`,
        text: `${forwardToCheckoutMessage}`,
        background: "black",
        backdrop: `
    rgba(0,0,123,0.8)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "red",
        confirmButtonText: `${goToCheckoutMessage}`,
        customClass: "confirm",
        allowOutsideClick: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate("/checkout");
          // dispatch({ type: "HIDE_HAMBURGER_MENU" });
        } else if (!result.isConfirmed || result.isDismissed) {
          // dispatch({ type: "HIDE_HAMBURGER_MENU" });
        }
      });
  }

  return (
    <Wrapper onClick={showCheckoutPageSwal}>
      <IconsDiv>
        <ShoppingIcon />
        <HappyFaceIcon className="face" />
      </IconsDiv>
    </Wrapper>
  );
};

export default ProductsPageCartIcon;
