import { useContext } from "react";
import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { selectShowHamburgerMenu } from "../../redux/hamburger-menu/hamburger-menu.selectors";
import { HamburgerMenuContext } from "../../contexts/hamburger-menu.context";

import NavLogo from "./nav-logo.component";
import NavMenu from "./nav-menu.component";
import NavSignInAndUp from "./nav-sign-in-and-up.component";
import NavSignOut from "./nav-sign-out.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import NavHamburger from "./nav-hamburger.component";
// import NavDashboard from "./nav-dashboard.component";

// import NavContact from "./nav-contact.component";

import { Nav, Menu } from "./navbar.styles";

const Navigation = () => {
  const { showHamburgerMenu } = useContext(HamburgerMenuContext);
  // const showHamburgerMenu = useSelector(selectShowHamburgerMenu);
  return (
    <>
      {/* <Nav showHamburgerMenu={showHamburgerMenu}> */}
      <Nav showHamburgerMenu={showHamburgerMenu}>
        <NavLogo />
        <NavHamburger showHamburgerMenu={showHamburgerMenu} />
        <Menu showHamburgerMenu={showHamburgerMenu}>
          <NavMenu />
          <NavSignInAndUp />
          <NavSignOut />
          <CartIcon />
        </Menu>

        {/* 
          <NavDashboard />
          <NavContact />
        </Menu> */}
      </Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
