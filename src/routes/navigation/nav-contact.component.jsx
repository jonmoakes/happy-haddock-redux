import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { hideHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.action";

import {
  areYouSureMessage,
  imSureMessage,
  forwardToContactMessage,
} from "../../strings/strings";

import "../../styles/confirm.css";

import { MenuLink } from "./navbar.styles";

const NavContact = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const swal = withReactContent(Swal);

  function showContactSwal() {
    swal
      .fire({
        title: `${areYouSureMessage}`,
        text: `${forwardToContactMessage}`,
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
          navigate("/contact");
        }
      });
  }

  return (
    <>
      {location.pathname.includes("product") ||
      location.pathname === "/checkout" ? (
        <MenuLink onClick={showContactSwal}>contact</MenuLink>
      ) : (
        location.pathname !== "/contact" && (
          <MenuLink
            onClick={() => {
              navigate("/contact");
            }}
          >
            contact
          </MenuLink>
        )
      )}
    </>
  );
};

export default NavContact;
