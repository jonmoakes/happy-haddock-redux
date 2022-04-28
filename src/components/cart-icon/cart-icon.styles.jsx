import styled from "styled-components";

import { ReactComponent as ShoppingIconSVG } from "../../assets/cart-icon.svg";
import { ReactComponent as HappyFaceSVG } from "../../assets/smiley.svg";

export const Wrapper = styled.div`
  height: 60px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    transform: scale(1.2);

    @media screen and (max-width: 1366px) {
      transform: unset;
    }
  }
  @media screen and (max-width: 850px) {
    margin-right: 0px;
  }
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 60px;
  height: 60px;

  @media screen and (max-width: 400px) {
    height: 45px;
    width: 45px;
  }

  @media screen and (max-width: 280px) {
    left: 25px;
  }
`;

export const IconsDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;

  .face {
    height: 20px;
    width: 20px;
    position: absolute;
    top: 15px;
    left: 25px;

    @media screen and (max-width: 400px) {
      width: 15px;
      height: 15px;
      top: 11px;
      left: 19px;
    }

    @media screen and (max-width: 280px) {
      left: 44px;
    }
  }
`;

export const HappyFaceIcon = styled(HappyFaceSVG)``;
