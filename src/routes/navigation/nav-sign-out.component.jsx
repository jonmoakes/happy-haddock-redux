import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import { selectCurrentUser } from "../../redux/user/user.selectors";
// import { selectShowHamburgerMenu } from "../../redux/hamburger-menu/hamburger-menu.selectors";
// import { useDispatch, useSelector } from "react-redux";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  signOutConfirmMessage,
  yesSignMeOutMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

import { MenuLink } from "./navbar.styles";

const NavSignOut = () => {
  const navigate = useNavigate();
  const swal = withReactContent(Swal);
  // const dispatch = useDispatch();
  // const currentUser = useSelector(selectCurrentUser);
  // const showHamburgerMenu = useSelector(selectShowHamburgerMenu);

  const { currentUser } = useContext(UserContext);

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
          // dispatch({ type: "SIGN_OUT_START" });
          signOutHandler();
        }
        // if (showHamburgerMenu) {
        //   dispatch({ type: "HIDE_HAMBURGER_MENU" });
        // }
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
