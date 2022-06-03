import { useNavigate } from "react-router-dom";

import {
  Wrapper,
  ShoppingIcon,
  HappyFaceIcon,
  IconsDiv,
} from "./cart-icon.styles";

const OtherPagesCartIcon = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <IconsDiv
        onClick={() => {
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
