import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { selectCurrentUser } from "../../store/user/user.selector";

import { HelpDiv } from "../../styles/help-div/help-div.styles";

const MenuWelcome = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HelpDiv>
      {location.pathname === "/menu" ? (
        <>
          <h1>our menu</h1>
          <p>
            welcome {currentUser.displayName}!
            <br />
            Tap on any category to view its products.
            <br />
            or tap the button below to view the entire menu on one page.
          </p>
          <button onClick={() => navigate("/full-menu")}>Vew Full Menu</button>
        </>
      ) : (
        <>
          <h1>our full menu</h1>
          <p>
            welcome {currentUser.displayName}!
            <br />
            Tap on any product to view it's options.
            <br />
            or tap the button below to view individual categories.
          </p>
          <button onClick={() => navigate("/menu")}>View Categories </button>
        </>
      )}
    </HelpDiv>
  );
};

export default MenuWelcome;
