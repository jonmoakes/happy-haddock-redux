import styled, { keyframes } from "styled-components";
import { bounceInDown, fadeInLeft } from "react-animations";

const bounceInDownAnimation = keyframes`${bounceInDown}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export const HelpDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  width: 70%;

  h1 {
    margin-bottom: 0px;
  }

  p {
    font-size: 16px;
  }

  @media screen and (max-width: 1366px) {
    width: 90%;
  }

  @media screen and (max-width: 450px) {
    width: 70%;
  }
`;

export const HelpTextDiv = styled.div`
  background-color: lightgrey;
  padding: 10px;
  border: 2px solid black;
  border-radius: 15px;
  margin: 20px auto 20px auto;
  width: 50%;
  animation: 1s ${bounceInDownAnimation};

  h2 {
    color: #d62424;
    text-shadow: 0.5px 0.5px 0.5px black;
    font-weight: 900;
    text-decoration: underline;
  }

  @media screen and (max-width: 1366px) {
    width: 80%;
  }
`;

export const NoSearchResultDiv = styled.div`
  width: 70%;
  height: auto;
  margin: 0 auto;
  background-color: lightgrey;
  padding: 0px 20px;
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

  @media screen and (max-width: 600px) {
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
  margin: 20px auto 0px auto;
  animation: 1s ${fadeInLeftAnimation};

  &.dashboard {
    margin-bottom: -5px;
  }

  &.clear-search {
    background-color: yellow;

    &:hover {
      background-color: yellow;
    }
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
