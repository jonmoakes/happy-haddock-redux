import styled from "styled-components";

import { ReactComponent as AddArrowSVG } from "../../assets/add-arrow.svg";
import { ReactComponent as MinusArrowSVG } from "../../assets/minus-arrow.svg";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border: 2px solid white;
  box-shadow: 6px 6px 6px black;
  padding: 25px 0 10px 0px;
  font-size: 20px;
  align-items: center;
  background-color: black;
  border-radius: 10px;
  margin-bottom: 50px;

  @media screen and (max-width: 1366px) {
    box-shadow: none;
    margin-bottom: 25px;
  }
`;

export const NameDiv = styled.div`
  margin-bottom: 10px;
`;

export const CheckoutItemText = styled.span`
  width: 34%;
  color: yellow;
  font-size: 20px;

  @media screen and (max-width: 450px) {
    padding-left: 5px;
  }

  p {
    font-size: 16px;
    color: whitesmoke;
  }

  span {
    color: salmon;
  }

  @media screen and (max-width: 1366px) {
    font-size: 20px;
  }
`;

export const ArrowContainer = styled.div`
  width: 34%;
  color: white;
  font-size: 30px;
  @media screen and (max-width: 1366px) {
    font-size: 20px;
  }
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const AddArrow = styled(AddArrowSVG)`
  cursor: pointer;
`;

export const MinusArrow = styled(MinusArrowSVG)`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;
