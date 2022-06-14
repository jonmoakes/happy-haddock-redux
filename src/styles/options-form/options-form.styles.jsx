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

  input {
    accent-color: red;
  }

  label {
    font-size: 20px;
    color: black;
    text-shadow: none;
    margin-bottom: 10px;

    &.price {
      font-size: 16px;
      padding-bottom: 5px;
    }

    @media screen and (max-width: 1366px) {
      font-size: 16px;
    }
  }

  input[type="radio"] {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    width: 20px;
    height: 20px;
  }

  input[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: transparent;
    /* Not removed via appearance */
    margin: 10px auto 0px auto;
    font: inherit;
    background-color: lightgrey;
    width: 1.5em;
    height: 1.5em;
    border: 2px solid black;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.9em;
    height: 0.9em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(black);
    /* Windows High Contrast Mode */
    background-color: black;
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  input[type="checkbox"]:focus {
    outline: max(2px, 0.15em) solid black;
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
      border-color: salmon;
      outline: none;
    }
  }

  &.quantity-div {
    animation: 1s ${bounceInDownAnimation};
  }

  @media screen and (max-width: 1366px) {
    width: 60%;
    padding: 10px 0px 20px 0px;
  }

  @media screen and (max-width: 850px) {
    width: 70%;
    padding: 5px 0px 10px 0px;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    padding: 5px 10px 10px 10px;
  }
`;

export const RequiredDiv = styled.div`
  margin: 10px auto 0px auto;

  span {
    color: red;
    font-size: 16px;
    background-color: black;
    padding: 4px;
    border: none;
    border-radius: 5px;
  }

  @media screen and (max-width: 1366px) {
    margin: 30px auto 10px auto;
  }

  @media screen and (max-width: 850px) {
    margin: 30px auto 0px auto;
  }
`;

export const Section = styled.div`
  height: auto;
  width: 100%;

  &.type {
    padding-bottom: 10px;
  }

  &.not-required {
    margin-top: -20px;
    margin-bottom: -5px;

    @media screen and (max-width: 1366px) {
      margin-bottom: -25px;
    }
  }

  p {
    text-decoration: underline;
    font-size: 22px;
    color: whitesmoke;

    &.price {
      font-size: 16px;
      color: black;
      text-shadow: none;
      text-decoration: none;
      margin-top: -10px;
      padding-bottom: 5px;
    }
  }
`;

export const RadioDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: -15px auto 15px auto;

  @media screen and (max-width: 450px) {
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
  height: 20px;
  border-radius: 5px;
  border: 2px solid black;
  font-family: inherit;
  outline: none;

  &:focus {
    box-shadow: 4px 4px 4px black;
    border-color: salmon;
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

export const ChoiceHeading = styled.p`
  padding: 20px 0px;
`;

export const OptionsLabel = styled.p`
  font-size: 20px;
  color: yellow;
  margin-top: 5px;
`;
