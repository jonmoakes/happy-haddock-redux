import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

import {
  Wrapper,
  ShoppingIcon,
  HappyFaceIcon,
  IconsDiv,
} from "./cart-icon.styles";

const OtherPagesCartIcon = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  return (
    <Wrapper>
      <IconsDiv
        onClick={() => {
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
