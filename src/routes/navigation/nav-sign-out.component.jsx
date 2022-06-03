import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { signOutStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectShowHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.selector";

import {
  signOutConfirmMessage,
  yesSignMeOutMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

import { MenuLink } from "./navbar.styles";

const NavSignOut = () => {
  const currentUser = useSelector(selectCurrentUser);
  const swal = withReactContent(Swal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function showSignOutConfirmSwal() {
    swal
      .fire({
        title: `${signOutConfirmMessage}`,
        background: "black",
        backdrop: `
    rgba(0,0,123,0.8)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "red",
        confirmButtonText: `${yesSignMeOutMessage}`,
        customClass: "confirm",
        allowOutsideClick: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(signOutStart());
          navigate("/");
        }
      });
  }

  return (
    <>
      {currentUser && (
        <MenuLink onClick={showSignOutConfirmSwal}>sign out</MenuLink>
      )}
    </>
  );
};

export default NavSignOut;
