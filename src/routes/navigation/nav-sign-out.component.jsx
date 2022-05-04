import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { selectCurrentUser } from "../../store/user/user.selectors";
import { hideHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.action.js";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  signOutConfirmMessage,
  yesSignMeOutMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

import { MenuLink } from "./navbar.styles";

const NavSignOut = () => {
  const currentUser = useSelector(selectCurrentUser);

  const navigate = useNavigate();
  const swal = withReactContent(Swal);
  const dispatch = useDispatch();

  const signOutHandler = async () => {
    await signOutUser();
    navigate("/sign-in");
  };

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
          dispatch(hideHamburgerMenu());
          signOutHandler();
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
