import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectShowHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.selector";

import NavLogo from "./nav-logo.component";
import NavMenu from "./nav-menu.component";
import NavSignInAndUp from "./nav-sign-in-and-up.component";
import NavContact from "./nav-contact.component";
import NavSignOut from "./nav-sign-out.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import NavHamburger from "./nav-hamburger.component";
import NavDashboard from "./nav-dashboard.component";

import { Nav, Menu } from "./navbar.styles";

const Navigation = () => {
  const showHamburgerMenu = useSelector(selectShowHamburgerMenu);
  return (
    <>
      <Nav showHamburgerMenu={showHamburgerMenu}>
        <NavLogo />
        <NavHamburger showHamburgerMenu={showHamburgerMenu} />
        <Menu showHamburgerMenu={showHamburgerMenu}>
          <NavMenu />
          <NavSignInAndUp />
          <NavDashboard />
          <NavContact />
          <NavSignOut />
          <CartIcon />
        </Menu>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
