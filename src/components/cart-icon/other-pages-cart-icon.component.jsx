import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { hideHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.action";

import {
  Wrapper,
  ShoppingIcon,
  HappyFaceIcon,
  IconsDiv,
} from "./cart-icon.styles";

const OtherPagesCartIcon = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <IconsDiv
        onClick={() => {
          dispatch(hideHamburgerMenu());
          navigate("/checkout");
        }}
      >
        <ShoppingIcon />
        <HappyFaceIcon className="face" />
      </IconsDiv>
    </Wrapper>
  );
};

export default OtherPagesCartIcon;
