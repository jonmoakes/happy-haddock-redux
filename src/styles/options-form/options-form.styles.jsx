import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";

const bounceInDownAnimation = keyframes`${bounceInDown}`;

export const OptionsForm = styled.form`
  width: 50%;
  height: auto;
  background-color: #3085d6;
  margin: 20px auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 20px 0px;
  animation: 1s ${bounceInDownAnimation};

  label {
    font-size: 20px;
    color: black;
    text-shadow: none;

    @media screen and (max-width: 1377px) {
      font-size: 16px;
      margin-top: 15px;
    }

    @media screen and (max-width: 450px) {
      margin-top: 10px;
    }
  }

  input[radio] {
    float: right;
    width: 20px;
    height: 20px;
    display: block;
    margin: 0px auto;
  }

  textarea {
    width: 90%;
    border: 2px solid black;
    border-radius: 15px;
    font-size: 20px;
    font-family: inherit;
    text-transform: capitalize;
    padding: 10px;
    overflow: hidden;

    &:focus {
      box-shadow: 4px 4px 4px black;
      border-color: red;
      outline: none;
    }
  }

  &.quantity-div {
    animation: 1s ${bounceInDownAnimation};
  }

  @media screen and (max-width: 1377px) {
    width: 60%;
    padding: 10px 0px 20px 0px;
  }

  @media screen and (max-width: 850px) {
    width: 70%;
    padding: 5px 0px 10px 0px;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const RequiredDiv = styled.div`
  margin: 0px auto 0px auto;
  span {
    color: red;
    font-size: 16px;
    background-color: black;
    padding: 4px;
    border: none;
    border-radius: 5px;
  }

  @media screen and (max-width: 1377px) {
    margin: 10px auto 10px auto;
  }
`;

export const Section = styled.div`
  height: auto;
  width: 100%;
  margin-top: -10px;
  margin-bottom: -20px;

  &.not-required {
    margin-top: -20px;
    margin-bottom: -5px;

    @media screen and (max-width: 1377px) {
      margin-bottom: -25px;
    }
  }

  p {
    text-decoration: underline;
    font-size: 22px;
    color: whitesmoke;
  }

  @media screen and (max-width: 1377px) {
    margin-top: -20px;
  }
`;

export const RadioDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5px auto 5px auto;

  .options-label {
    @media screen and (max-width: 450px) {
      font-size: 14px;
    }
  }

  .checkbox {
    margin-bottom: 10px;
    position: relative;
    top: 4px;
    left: 10px;
    padding: 0px 3px 0px 3px;
    background-color: black;
    border-radius: 5px;

    @media screen and (max-width: 1377px) {
      top: 3.5px;
      padding: 3px 3px 1px 3px;
    }

    @media screen and (max-width: 600px) {
      top: 4px;
    }

    @media screen and (max-width: 450px) {
      margin-bottom: 20px;
      top: 7.5px;
      left: 5px;
    }
  }
`;

export const TextAreaDiv = styled.div`
  margin-top: 10px;
  width: 90%;
  height: 100px;
`;

export const QuantityInput = styled.input`
  background-color: white;
  color: black;
  font-size: 18px;
  margin: 0px auto;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 80%;
  height: 50px;
  border-radius: 5px;
  border: 2px solid black;
  font-family: inherit;
  outline: none;

  &:focus {
    box-shadow: 4px 4px 4px black;
    border-color: red;
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const RequiredInfoDiv = styled.div`
  width: 90%;
  margin: 0px auto 50px auto;
  animation: 1s ${bounceInDownAnimation};

  span {
    color: red;
  }
`;

export const InfoText = styled.p`
  font-size: 16px;
  color: whitesmoke;
`;
