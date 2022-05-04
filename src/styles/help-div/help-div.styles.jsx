import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";

const bounceInDownAnimation = keyframes`${bounceInDown}`;

export const HelpDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto -20px auto;
  width: 90%;

  h1 {
    margin-bottom: -10px;
  }

  p {
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    margin: 0px auto -10px auto;
  }
`;

export const ClearButtonDiv = styled.div`
  width: 70%;
  height: auto;
  margin: 70px auto 0px auto;
  background-color: lightgrey;
  padding: 0px 20px 30px 20px;
  border: 2px solid black;
  border-radius: 15px;
  animation: 1s ${bounceInDownAnimation};

  h2 {
    color: red;
    text-shadow: none;
  }

  p {
    font-size: 18px;
    color: black;
    text-shadow: none;

    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }

  &.table {
    margin: 70px auto 50px auto;

    @media screen and (max-width: 850px) {
      margin: 50px auto 40px auto;
    }

    @media screen and (max-width: 600px) {
      margin: 30px auto 30px auto;
    }

    @media screen and (max-width: 400px) {
      width: 90%;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 30px auto 0px auto;
    width: 80%;
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 300px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: #00ff2a;
  cursor: pointer;
  text-transform: capitalize;
  color: black;
  font-weight: bold;
  fon-family: inherit;
  font-size: 16px;

  &.dashboard {
    margin-bottom: -10px;
  }

  &:hover {
    background-color: yellow;

    @media screen and (max-width: 1366px) {
      background-color: #00ff2a;
    }
  }

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;
