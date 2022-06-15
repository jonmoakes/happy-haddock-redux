import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";

import { Link } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import { BounceInDownDiv } from "../../styles/bounce-in-down-div/bounce-in-down-div.styles";
import { Div } from "../../styles/div/div.styles";

const bounceInDownAnimation = keyframes`${bounceInDown}`;

export const ShowTableOrderChoiceButton = styled.button`
  width: 350px;
  font-size: 20px;
  color: black;
  height: auto;
  padding: 10px;
  display: inline;
  margin: -15px auto 10px auto;
  border-radius: 15px;
  border: 2px solid black;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  font-family: inherit;
  font-weight: bold;

  &:hover {
    transform: scale(1.05);
    background-color: #0afe76;
  }

  @media screen and (min-width: 1367px) {
    margin: -15px auto -20px auto;
  }

  @media screen and (max-width: 450px) {
    width: 250px;
    font-size: 16px;
  }

  @media screen and (max-width: 280px) {
    width: 200px;
  }
`;

export const HideTableOrderChoiceButton = styled(ShowTableOrderChoiceButton)`
  width: 250px;
  background-color: red;
  margin: 10px auto 10px auto;

  &:hover {
    background-color: red;
  }

  @media screen and (max-width: 320px) {
    width: 200px;
  }
`;

export const TableOrderSelectButton = styled.button`
  width: 200px;
  height: auto;
  padding: 10px;
  display: inline;
  margin: 10px;
  border-radius: 15px;
  border: 2px solid black;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  font-family: inherit;
  font-weight: bold;
  color: black;

  &:hover {
    transform: scale(1.05);
    background-color: #0afe76;

    @media screen and (max-width: 1366px) {
      transform: none;
    }
  }
`;

export const ContactLink = styled(Link)`
  color: red;
  text-decoration: none;

  &:hover {
    color: yellow;
    text-shadow: 1px 1px 1px black;
  }

  &.cut-link {
    color: yellow;

    &:hover {
      color: #00ff77;
    }
  }
`;

export const EmailLink = styled.p`
  text-transform: lowercase;
  color: black;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
    color: red;

    @media screen and (max-width: 1366px) {
      color: black;
      text-decoration: none;
    }
  }
`;

export const CutAmountDiv = styled(BounceInDownDiv)`
  margin-top: 50px;
  background-color: salmon;
  padding-bottom: 40px;

  h2,
  p {
    color: black;
    text-shadow: none;

    &.amount {
      color: whitesmoke;
      text-shadow: 1px 1px 1px black;
      font-size: 30px;
    }
  }
`;

export const SumInfoDiv = styled.div`
  p {
    color: black;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  animation: 1.5s ${bounceInDownAnimation};
`;

export const TableDiv = styled.div`
  margin: 0px auto 100px auto;
  width: 100%;
  box-shadow: 20px 20px 20px black;
  background-color: black;

  @media screen and (max-width: 1366px) {
    height: 90vh;
    width: 90vw;
    overflow: auto;
    border: 4px solid black;
    box-shadow: none;
  }

  @media screen and (max-width: 850px) {
    margin: 30px auto 100px auto;
  }
`;

export const TableWithStyle = styled.table`
  border-collapse: collapse;
  margin: 0px auto 200px auto;
  background-color: #ffe900;
  text-shadow: none;
  white-space: pre-line;
  width: 100%;

  th {
    font-size: 16px;
    background-color: #00ff77;
    padding: 20px 5px;
    border: 3px solid black;
    width: auto;

    @media screen and (max-width: 320px) {
      font-size: 16px;
    }
  }

  tr {
    &:nth-child(even) {
      background-color: lightgrey;
    }
  }

  td {
    border: 3px solid black;
    padding: 20px 5px;
    padding: 20px 10px;
    width: auto;

    @media screen and (max-width: 600px) {
      font-size: 14px;
    }

    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 200%;
    margin: 0px auto 0px auto;
  }
`;

export const PaginationDiv = styled(Div)`
  margin: -150px auto 0px auto;
  border: none;
  box-shadow: none;
  background-color: transparent;

  hr {
    &.page-end {
      margin-bottom: 300px;
    }
  }

  @media screen and (max-width: 1366px) {
    margin: -50px auto 0px auto;
  }
`;

export const PageButton = styled(CustomButton)`
  min-width: unset;
  width: 50px;
  height: 10px;
  margin: 0px 10px;
  line-height: 0px;
  font-size: 16px;
  text-shadow: none;
  padding: 10px 5px;
  background-color: #0afe76;
  color: black;

  &.back-button {
    background-color: red;
  }

  @media screen and (max-width: 1024px) {
    margin: 0px 5px;
  }

  @media screen and (max-width: 1024px) {
    width: 40px;
  }
`;

export const PaginationTextDiv = styled.div`
  margin-bottom: 40px;
`;

export const PaginationText = styled.p`
  font-size: 16px;
`;

export const PaginationInput = styled.input`
  width: 200px;
  height: 40px;
  font-size: 20px;
  border-radius: 15px;
  border: 2px solid black;
  text-align: center;
`;

export const PaginationSelect = styled.select`
  width: 200px;
  height: 40px;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid black;
  outline: none;
  color: black;
  text-align: center;
`;
