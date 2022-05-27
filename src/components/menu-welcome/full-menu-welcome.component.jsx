import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCurrentUser } from "../../store/user/user.selector";

import { Button } from "../../styles/help-div/help-div.styles";

const FullMenuWelcome = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  return (
    <>
      <h1>our full menu</h1>
      <p>
        welcome {currentUser.displayName}!
        <br />
        Tap on any product to view it's options.
        <br />
        or tap the button below to view individual categories.
      </p>
      <Button className="menu-switcher" onClick={() => navigate("/menu")}>
        View Categories
      </Button>
    </>
  );
};

export default FullMenuWelcome;
