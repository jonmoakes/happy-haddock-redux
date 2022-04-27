import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  areYouSureMessage,
  imSureMessage,
  forwardToContactMessage,
} from "../../strings/strings";

import "../../components/styles/confirm.css";

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
          dispatch({ type: "HIDE_HAMBURGER_MENU" });
          navigate("/contact");
        } else if (!result.isConfirmed || result.isDismissed) {
          dispatch({ type: "HIDE_HAMBURGER_MENU" });
        }
      });
  }

  return (
    <>
      {location.pathname.includes("/products") ||
      location.pathname === "/checkout" ? (
        <MenuLink onClick={showContactSwal}>contact</MenuLink>
      ) : (
        location.pathname !== "/contact" && (
          <MenuLink
            onClick={() => {
              navigate("/contact");
              dispatch({ type: "HIDE_HAMBURGER_MENU" });
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
