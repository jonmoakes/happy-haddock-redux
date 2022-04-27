import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectShowHamburgerMenu } from "../../redux/hamburger-menu/hamburger-menu.selectors";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  signOutConfirmMessage,
  yesSignMeOutMessage,
} from "../../strings/strings";

import "../../components/styles/confirm.css";

import { MenuLink } from "./navbar.styles";

const NavSignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const showHamburgerMenu = useSelector(selectShowHamburgerMenu);
  const swal = withReactContent(Swal);

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
          dispatch({ type: "SIGN_OUT_START" });
          navigate("/sign-in");
        }
        if (showHamburgerMenu) {
          dispatch({ type: "HIDE_HAMBURGER_MENU" });
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
