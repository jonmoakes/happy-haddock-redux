import { useLocation, useNavigate } from "react-router-dom";

import useShowHomePageSwal from "../../hooks/swals/use-show-homepage-swal";
import Logo from "../../assets/happy-haddock-200x200.png";

import { LogoContainer, LogoImage } from "./navbar.styles";

const NavLogo = () => {
  const { showHomePageSwal } = useShowHomePageSwal();
  const location = useLocation();
  const navigate = useNavigate();

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
