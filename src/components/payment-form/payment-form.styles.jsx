import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const PaymentFormDiv = styled.div`
  background-color: black;
  width: 50%;
  margin: 50px auto 0px auto;
  padding: 20px 10px;
  border-radius: 15px;
  border: 2px solid whitesmoke;

  p {
    font-size: 18px;
  }

  @media screen and (max-width: 1366px) {
    width: 90%;
  }
`;

export const ContactButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: lightgrey;
  font-familt: inherit;
  border-radius: 5px;
  outline: none;
  border: none;
  margin: 10px;
  font-weight: bold;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: black;
  font-size: 18px;

  &.phone {
    background-color: yellow;
  }

  &:hover {
    transform: scale(1.05);

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
    }
  }
`;

export const PaymentFormInstructionsText = styled.p`
  color: whitesmoke;
  font-size: 18px;

  .yellow {
    color: yellow;
  }
  &.red {
    color: red;
  }

  &.red,
  &.card-number,
  &.heading {
    text-transform: capitalize;
    font-size: 22px;

    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  }

  &.card-number {
    text-shadow: none;
    color: black;

    span {
      color: yellow;
      text-shadow: 1px 1px 1px black;
    }
  }
`;

export const ErrorDiv = styled.div`
  margin-bottom: 30px;
`;

export const CardInputDiv = styled.div`
  background-color: whitesmoke;
  height: 50px;
  width: 50%;
  margin: 30px auto 50px auto;
  padding: 30px 20px 0px 20px;
  border-radius: 15px;

  @media screen and (max-width: 1366px) {
    width: 80%;
    padding: 25px 0px 0px 0px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const PayButton = styled(CustomButton)`
  min-width: 165px;
  width: 400px;
  height: 70px;
  letter-spacing: 0.5px;
  line-height: 35px;
  padding: 15px 15px;
  font-size: 22px;
  background-color: yellow;
  color: black;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid black;
  outline: none;
  text-shadow: none;
  display: flex;
  justify-content: center;
  transition: none;
  margin: 0 auto;
  font-weight: bolder;

  :active {
    transform: translate(0, 0.5rem);
  }

  &:hover {
    transform: none;
    background-color: #0eeb1e;
    color: black;

    @media screen and (max-width: 1366px) {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 450px) {
    width: 85%;
  }

  @media screen and (max-width: 360px) {
    font-size: 15px;
  }
`;

export const DisabledButton = styled(PayButton)`
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
`;

export const DemoInfoDiv = styled.div`
  background-color: darkgrey;
  padding: 10px;
  width: 90%;
  margin: 0px auto 30px auto;
  display: grid;
  place-content: center;
  border-radius: 20px;
`;
