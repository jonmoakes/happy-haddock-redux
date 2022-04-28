import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";

const slideInLeftAnimation = keyframes`${slideInLeft}`;

export const TitleDiv = styled.div`
  background-color: salmon;
  width: 50%;
  margin: 50px auto;
  border-radius: 15px;
  border: 2px solid black;
  height: 100px;
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 1s ${slideInLeftAnimation};

  h1 {
    color: white;
    text-decoration: none;
    font-size: 30px;

    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 850px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    margin: 25px auto;
    height: 70px;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
  }
`;
