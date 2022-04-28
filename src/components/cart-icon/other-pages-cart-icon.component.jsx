import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

import { HamburgerMenuContext } from "../../contexts/hamburger-menu.context";

import {
  Wrapper,
  ShoppingIcon,
  HappyFaceIcon,
  IconsDiv,
} from "./cart-icon.styles";

const OtherPagesCartIcon = () => {
  const { setShowHamburgerMenu } = useContext(HamburgerMenuContext);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  return (
    <Wrapper>
      <IconsDiv
        onClick={() => {
          setShowHamburgerMenu(false);
          navigate("/checkout");
          // dispatch({ type: "HIDE_HAMBURGER_MENU" });
        }}
      >
        <ShoppingIcon />
        <HappyFaceIcon className="face" />
      </IconsDiv>
    </Wrapper>
  );
};

export default OtherPagesCartIcon;
