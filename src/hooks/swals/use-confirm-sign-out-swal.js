import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { signOutStart } from "../../store/user/user.action";

import {
  signOutConfirmMessage,
  yesSignMeOutMessage,
  signOutSuccessMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

const useConfirmSignOutSwal = () => {
  const swal = withReactContent(Swal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const confirmSignOutswal = () => {
    swal
      .fire({
        title: signOutConfirmMessage,
        background: "black",
        backdrop: `
    rgba(0,0,123,0.8)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "red",
        confirmButtonText: yesSignMeOutMessage,
        customClass: "confirm",
        allowOutsideClick: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(signOutStart());
          swal.fire({
            title: "success!",
            text: signOutSuccessMessage,
            background: "black",
            backdrop: `
        rgba(0,0,123,0.8)`,
            icon: "success",
            timer: 2000,
            customClass: "confirm",
            allowOutsideClick: true,
          });
          navigate("/");
        }
      });
  };

  return { confirmSignOutswal };
};

export default useConfirmSignOutSwal;
