import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";

const bounceInDownAnimation = keyframes`${bounceInDown}`;

export const PriceWarningDiv = styled.div`
  margin-top: 15px;
  animation: 1s ${bounceInDownAnimation};
`;

export const OptionsPriceInfoText = styled.span`
  font-size: 16px;
  color: whitesmoke;
`;
