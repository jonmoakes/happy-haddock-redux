import { useLocation } from "react-router-dom";

import CategoryWelcome from "./category-welcome.component";
import FullMenuWelcome from "./full-menu-welcome.component";
import { HelpDiv } from "../../styles/help-div/help-div.styles";

const MenuWelcome = () => {
  const location = useLocation();

  return (
    <HelpDiv>
      {location.pathname === "/menu" ? (
        <CategoryWelcome />
      ) : (
        <FullMenuWelcome />
      )}
    </HelpDiv>
  );
};

export default MenuWelcome;
