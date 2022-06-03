import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { hideHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.action";
import Logo from "../../assets/happy-haddock-200x200.png";

import {
  areYouSureMessage,
  imSureMessage,
  forwardToHomeMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

import { LogoContainer, LogoImage } from "./navbar.styles";

const NavLogo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
          dispatch(hideHamburgerMenu());
          navigate("/");
        }
      });
  }

  return (
    <>
      {location.pathname.includes("product") ||
      location.pathname === "/checkout" ? (
        <LogoContainer onClick={showHomePageSwal}>
          <LogoImage src={Logo} alt="logo" />
        </LogoContainer>
      ) : (
        <LogoContainer
          onClick={() => {
            navigate("/");
          }}
        >
          <LogoImage src={Logo} alt="logo" />
        </LogoContainer>
      )}
    </>
  );
};

export default NavLogo;
