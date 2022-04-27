import { useLocation, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  areYouSureMessage,
  imSureMessage,
  backToMenuPagePromptMessage,
} from "../../strings/strings";

import "../../components/styles/confirm.css";

import { MenuLink } from "./navbar.styles";

const NavMenu = () => {
  // const location = useLocation();
  // const currentUser = useSelector(selectCurrentUser);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const swal = withReactContent(Swal);

  // function showMenuPageSwal() {
  //   swal
  //     .fire({
  //       title: `${areYouSureMessage}`,
  //       text: `${backToMenuPagePromptMessage}`,
  //       background: "black",
  //       backdrop: `
  //   rgba(0,0,123,0.8)`,
  //       icon: "question",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "red",
  //       confirmButtonText: `${imSureMessage}`,
  //       customClass: "confirm",
  //       allowOutsideClick: false,
  //       reverseButtons: true,
  //     })
  //     .then((result) => {
  //       if (result.isConfirmed) {
  //         // dispatch({ type: "HIDE_HAMBURGER_MENU" });
  //         navigate("/menu");
  //       } else if (!result.isConfirmed || result.isDismissed) {
  //         // dispatch({ type: "HIDE_HAMBURGER_MENU" });
  //       }
  //     });
  // }

  return (
    <>
      <MenuLink>hi</MenuLink>
      {/* {currentUser &&
      (location.pathname.includes("/products") ||
        location.pathname === "/checkout") ? (
        <MenuLink onClick={showMenuPageSwal}>menu</MenuLink>
      ) : (
        currentUser &&
        location.pathname !== "/menu" && (
          <MenuLink
            onClick={() => {
              navigate("/menu");
              dispatch({ type: "HIDE_HAMBURGER_MENU" });
            }}
          >
            menu
          </MenuLink>
        )
      )} */}
    </>
  );
};

export default NavMenu;
