import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";

const bounceInDownAnimation = keyframes`${bounceInDown}`;

export const BounceInDownDiv = styled.div`
  animation: 1s ${bounceInDownAnimation};
  background-color: lightgrey;
  padding: 10px;
  border: 2px solid black;
  border-radius: 15px;
  margin: 20px auto 20px auto;
  width: 80%;

  h2 {
    color: #d62424;
    text-shadow: 0.5px 0.5px 0.5px black;
    font-weight: 900;
    text-decoration: underline;

    @media screen and (max-width: 450px) {
      font-size: 22px;
    }
  }

  &.dashboard {
    margin: 20px auto 0px auto;

    span {
      &.table-order-span {
        background-color: whitesmoke;
        border: 1px solid black;
        padding: 2px;
        border-radius: 5px;
      }
    }
  }

  &.table-order-choice {
    margin-top: 50px;
    margin-bottom: 40px;

    h1 {
      color: black;
      text-shadow: none;
      margin-top: 10px;
    }
    p {
      color: black;
      text-shadow: none;

      &.small-screen-instructions {
        font-size: 16px;
        color: whitesmoke;
        text-shadow: 1px 1px 1px black;
        margin-top: 15px;
        margin-bottom: -20px;

        @media screen and (min-width: 1367px) {
          display: none;
        }
      }
    }

    @media screen and (max-width: 450px) {
      margin-bottom: 0px;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 90%;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const Text = styled.p`
  font-weight: normal;
  color: black;
  text-shadow: none;
  font-weight: 500;

  span {
    &.info {
      color: blue;
    }

    &.checkbox-info {
      background-color: #00ff2a;
      padding: 0px 5px;
      border: 1px solid black;
      border-radius: 5px;
    }
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const Span = styled.span`
  color: red;
  background-color: black;
  padding: 2px 5px;
  border-radius: 5px;

  &.button-text {
    background-color: #00ff2a;
    color: black;
    border: 1px solid black;
  }

  &.choose-options {
    background-color: salmon;
    color: black;
    border: 1px solid black;
  }

  &.categories {
    background-color: red;
    color: black;
    border: 1px solid black;
  }
`;
