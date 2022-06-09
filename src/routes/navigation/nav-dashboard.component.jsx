import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

import { MenuLink } from "./navbar.styles";

const NavDashboard = () => {
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {location.pathname !== "/dashboard" &&
        currentUser &&
        currentUser.id === process.env.REACT_APP_APP_OWNER_ID && (
          <MenuLink
            onClick={() => {
              navigate("/dashboard");
              dispatch({ type: "HIDE_HAMBURGER_MENU" });
            }}
          >
            dashboard
          </MenuLink>
        )}
    </>
  );
};

export default NavDashboard;
