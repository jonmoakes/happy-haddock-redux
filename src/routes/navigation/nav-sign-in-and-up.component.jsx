import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import { MenuLink } from "./navbar.styles";

const NavSignInAndUp = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/sign-in" &&
      location.pathname !== "/sign-up" &&
      !currentUser ? (
        <>
          <MenuLink
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            sign in
          </MenuLink>
          <MenuLink
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            sign up
          </MenuLink>
        </>
      ) : location.pathname === "/sign-in" && !currentUser ? (
        <MenuLink
          onClick={() => {
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
