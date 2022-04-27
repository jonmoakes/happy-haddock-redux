import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";

const slideInLeftAnimation = keyframes`${slideInLeft}`;

export const ProductItemDiv = styled.div`
  margin: 0px auto 50px auto;
  width: 70%;
  height: auto;
  background-color: black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px 20px 30px 20px;
  animation: 1s ${slideInLeftAnimation};

  @media screen and (max-width: 1377px) {
    width: 90%;
  }

  @media screen and (max-width: 450px) {
    padding: 40px 20px 30px 20px;
  }

  @media screen and (max-width: 280px) {
    padding: 40px 10px 50px 10px;
  }
`;

export const Name = styled.span`
  color: yellow;
  font-weight: bold;
  font-size: 25px;
  text-decoration: underline;

  @media screen and (max-width: 450px) {
    margin-top: -20px;
    font-size: 18px;
  }
`;

export const Description = styled.span`
  margin-top: 15px;
  color: whitesmoke;
  font-weight: bold;
  text-shadow: none;
  font-size: 18px;
`;

export const Price = styled.span`
  margin-top: 15px;
  color: #00ff2a;
  font-weight: bold;
  font-size: 25px;

  @media screen and (max-width: 450px) {
    width: unset;
  }
`;

export const ChooseOptionsButton = styled.button`
  width: 50%;
  height: 50px;
  background-color: salmon;
  cursor: pointer;
  border: none;
  border-radius: 15px;
  margin-top: 10px;
  font-family: inherit;
  font-weight: bold;
  color: black;
  font-size: 16px;
  text-transform: capitalize;
  outline: none;

  @media screen and (max-width: 1377px) {
    width: 60%;
  }
  @media screen and (max-width: 850px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
