import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { hideHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.action";

import {
  areYouSureMessage,
  imSureMessage,
  forwardToHomeMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

const useShowHomePageSwal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const swal = withReactContent(Swal);

  const showHomePageSwal = () => {
    swal
      .fire({
        title: areYouSureMessage,
        text: forwardToHomeMessage,
        background: "black",
        backdrop: `
    rgba(0,0,123,0.8)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "red",
        confirmButtonText: imSureMessage,
        customClass: "confirm",
        allowOutsideClick: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(hideHamburgerMenu());
          navigate("/");
        }
      });
  };

  return { showHomePageSwal };
};

export default useShowHomePageSwal;
