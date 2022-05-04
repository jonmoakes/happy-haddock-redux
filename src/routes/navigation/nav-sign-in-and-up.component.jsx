import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selectors";

import { hideHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.action";

import { MenuLink } from "./navbar.styles";

const NavSignInAndUp = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <>
      {location.pathname !== "/sign-in" &&
      location.pathname !== "/sign-up" &&
      !currentUser ? (
        <>
          <MenuLink
            onClick={() => {
              dispatch(hideHamburgerMenu());

              navigate("/sign-in");
            }}
          >
            sign in
          </MenuLink>
          <MenuLink
            onClick={() => {
              dispatch(hideHamburgerMenu());
              navigate("/sign-up");
            }}
          >
            sign up
          </MenuLink>
        </>
      ) : location.pathname === "/sign-in" && !currentUser ? (
        <MenuLink
          onClick={() => {
            dispatch(hideHamburgerMenu());
            navigate("/sign-up");
          }}
        >
          sign up
        </MenuLink>
      ) : (
        location.pathname === "/sign-up" &&
        !currentUser && (
          <MenuLink
            onClick={() => {
              dispatch(hideHamburgerMenu());
              navigate("/sign-in");
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
