import { useLocation, useNavigate } from "react-router-dom";

import useShowContactSwal from "../../hooks/swals/use-show-contact-swal";

import { MenuLink } from "./navbar.styles";

const NavContact = () => {
  const { showContactSwal } = useShowContactSwal();

  const location = useLocation();
  const navigate = useNavigate();

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
