import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";

const bounceInDownAnimation = keyframes`${bounceInDown}`;

export const AddToOrderButtonContainer = styled.button`
  font-family: inherit;
  font-weight: bold;
  margin-top: 20px;
  background-color: #00ff2a;
  border-radius: 15px;
  width: 50%;
  height: 80px;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
  text-transform: capitalize;
  border: none;
  color: black;
  animation: 1s ${bounceInDownAnimation};

  &:hover {
    background-color: whitesmoke;

    @media screen and (max-width: 1377px) {
      background-color: #00ff2a;
    }
  }

  :active {
    transform: translate(0, 0.5rem);

    @media screen and (max-width: 1366px) {
      transform: none;
    }
  }

  @media screen and (max-width: 1377px) {
    background-color: #00ff2a;
    width: 60%;
  }

  @media screen and (max-width: 850px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  @media screen and (max-width: 280px) {
    height: 70px;
  }
`;

export const Text = styled.p`
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Span = styled.span`
  color: red;
`;
