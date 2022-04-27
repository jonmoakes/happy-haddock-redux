import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// import { selectCurrentUser } from "../../redux/user/user.selectors";

import { MenuLink } from "./navbar.styles";

const NavSignInAndUp = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <MenuLink onClick={() => navigate("/sign-in")}>sign in</MenuLink>
      <MenuLink onClick={() => navigate("/sign-up")}>sign up</MenuLink>
      {/* {location.pathname !== "/sign-in" &&
      location.pathname !== "/sign-up" &&
      !currentUser ? (
        <>
          <MenuLink
            onClick={() => {
              navigate("/sign-in");
              dispatch({ type: "HIDE_HAMBURGER_MENU" });
            }}
          >
            sign in
          </MenuLink>
          <MenuLink
            onClick={() => {
              navigate("/sign-up");
              dispatch({ type: "HIDE_HAMBURGER_MENU" });
            }}
          >
            sign up
          </MenuLink>
        </>
      ) : location.pathname === "/sign-in" && !currentUser ? (
        <MenuLink
          onClick={() => {
            navigate("/sign-up");
            dispatch({ type: "HIDE_HAMBURGER_MENU" });
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
              dispatch({ type: "HIDE_HAMBURGER_MENU" });
            }}
          >
            sign in
          </MenuLink>
        )
      )} */}
    </>
  );
};

export default NavSignInAndUp;
