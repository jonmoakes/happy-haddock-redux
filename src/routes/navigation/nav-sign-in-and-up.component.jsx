import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { selectCurrentUser } from "../../redux/user/user.selectors";

import { UserContext } from "../../contexts/user.context";
import { HamburgerMenuContext } from "../../contexts/hamburger-menu.context";

import { MenuLink } from "./navbar.styles";

const NavSignInAndUp = () => {
  const { currentUser } = useContext(UserContext);
  const { setShowHamburgerMenu } = useContext(HamburgerMenuContext);
  const navigate = useNavigate();
  const location = useLocation();

  // const dispatch = useDispatch();
  // const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      {location.pathname !== "/sign-in" &&
      location.pathname !== "/sign-up" &&
      !currentUser ? (
        <>
          <MenuLink
            onClick={() => {
              setShowHamburgerMenu(false);
              navigate("/sign-in");
              // dispatch({ type: "HIDE_HAMBURGER_MENU" });
            }}
          >
            sign in
          </MenuLink>
          <MenuLink
            onClick={() => {
              setShowHamburgerMenu(false);
              navigate("/sign-up");
              // dispatch({ type: "HIDE_HAMBURGER_MENU" });
            }}
          >
            sign up
          </MenuLink>
        </>
      ) : location.pathname === "/sign-in" && !currentUser ? (
        <MenuLink
          onClick={() => {
            setShowHamburgerMenu(false);
            navigate("/sign-up");
            // dispatch({ type: "HIDE_HAMBURGER_MENU" });
          }}
        >
          sign up
        </MenuLink>
      ) : (
        location.pathname === "/sign-up" &&
        !currentUser && (
          <MenuLink
            onClick={() => {
              setShowHamburgerMenu(false);
              navigate("/sign-in");
              // dispatch({ type: "HIDE_HAMBURGER_MENU" });
            }}
          >
            sign in
          </MenuLink>
        )
      )}
    </>
  );
};

export default NavSignInAndUp;
