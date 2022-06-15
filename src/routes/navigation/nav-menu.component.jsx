import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useShowMenuPageSwal from "../../hooks/swals/use-show-menu-page-swal";

import { selectCurrentUser } from "../../store/user/user.selector";

import { MenuLink } from "./navbar.styles";

const NavMenu = () => {
  const { showMenuPageSwal } = useShowMenuPageSwal();
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {currentUser &&
      (location.pathname.includes("product") ||
        location.pathname === "/checkout") ? (
        <MenuLink onClick={showMenuPageSwal}>menu</MenuLink>
      ) : (
        currentUser &&
        location.pathname !== "/menu" && (
          <MenuLink
            onClick={() => {
              navigate("/menu");
            }}
          >
            menu
          </MenuLink>
        )
      )}
    </>
  );
};

export default NavMenu;
