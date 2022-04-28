import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { HamburgerMenuContext } from "../../contexts/hamburger-menu.context";

import Logo from "../../assets/happy-haddock-200x200.png";

import {
  areYouSureMessage,
  imSureMessage,
  forwardToHomeMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

import { LogoContainer, LogoImage } from "./navbar.styles";

const NavLogo = () => {
  const { setShowHamburgerMenu } = useContext(HamburgerMenuContext);
  const location = useLocation();
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const swal = withReactContent(Swal);

  function showHomePageSwal() {
    swal
      .fire({
        title: `${areYouSureMessage}`,
        text: `${forwardToHomeMessage}`,
        background: "black",
        backdrop: `
    rgba(0,0,123,0.8)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "red",
        confirmButtonText: `${imSureMessage}`,
        customClass: "confirm",
        allowOutsideClick: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          setShowHamburgerMenu(false);
          navigate("/");
          // dispatch({ type: "HIDE_HAMBURGER_MENU" });
        } else if (!result.isConfirmed || result.isDismissed) {
          setShowHamburgerMenu(false);
          // dispatch({ type: "HIDE_HAMBURGER_MENU" });
        }
      });
  }

  return (
    <>
      {location.pathname.includes("/products") ||
      location.pathname === "/checkout" ? (
        <LogoContainer onClick={showHomePageSwal}>
          <LogoImage src={Logo} alt="logo" />
        </LogoContainer>
      ) : (
        <LogoContainer
          onClick={() => {
            navigate("/");
            setShowHamburgerMenu(false);
            // dispatch({ type: "HIDE_HAMBURGER_MENU" });
          }}
        >
          <LogoImage src={Logo} alt="logo" />
        </LogoContainer>
      )}
    </>
  );
};

export default NavLogo;
