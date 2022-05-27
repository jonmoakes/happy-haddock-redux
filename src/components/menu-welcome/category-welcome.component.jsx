import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCurrentUser } from "../../store/user/user.selector";

import { Button } from "../../styles/help-div/help-div.styles";

const CategoryWelcome = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  return (
    <>
      <h1>our menu</h1>
      <p>
        welcome {currentUser.displayName}!
        <br />
        Tap on any category to view its products.
        <br />
        or tap the button below to view the entire menu on one page.
      </p>
      <Button className="menu-switcher" onClick={() => navigate("/full-menu")}>
        Vew Full Menu
      </Button>
      <hr />
    </>
  );
};

export default CategoryWelcome;
