import styled from "styled-components";

import CustomButton from "../../custom-button/custom-button.component";

import { Div } from "../div/div.styles";

export const HeaderRemoveText = styled.span`
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const EditEntryDiv = styled.div`
  margin-top: 50px;
`;

export const SearchDiv = styled(Div)`
  @media screen and (max-width: 450px) {
    padding: 20px 5px 20px 10px;
  }
`;

export const NoMatchDiv = styled(Div)`
  padding: 10px 10px 10px 10px;
  h2 {
    text-decoration: none;
    color: black;
    text-shadow: none;
  }
`;

export const TableDiv = styled.div`
  width: 100%;
  margin: 0px auto 100px auto;
`;

export const PaginationDiv = styled(Div)`
  margin: -250px auto 300px auto;
  border: none;
  box-shadow: none;
  background-color: transparent;

  @media screen and (max-width: 450px) {
    margin: -300px auto 200px auto;
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
  background-color: #ffbd4a;
  color: black;

  @media screen and (max-width: 1024px) {
    margin: 0px 5px;
  }

  @media screen and (max-width: 1024px) {
    width: 40px;
  }
`;

export const PaginationButton = styled.input`
  width: 50px;
  outline: none;
`;

export const PaginationTextDiv = styled.div`
  margin-bottom: 40px;
`;

export const PaginationText = styled.p`
  font-size: 16px;
`;

export const PaginationSelect = styled.select`
  width: 200px;
  padding: 10px;

  border-radius: 10px;
  border: 2px solid black;
  outline: none;

  &:focus {
    border-color: #1d9bee;
    box-shadow: 6px 6px 6px black;
  }
`;

export const NoEntriesDiv = styled(Div)`
  @media screen and (max-width: 1024px) {
    margin: 0px auto 200px auto;
  }
`;

export const Required = styled.span`
  color: red;
`;

export const SubjectsDiv = styled.div`
  margin: 25px auto 0px auto;
  width: 100%;
`;

export const SubjectsInputsDiv = styled.div`
  background-color: plum;
  padding: 20px 10px 30px 10px;
  border: 2px solid black;
  border-radius: 10px;
  margin: 40px auto 0px auto;
  width: 90%;

  label {
    color: black;
    text-shadow: none;
  }
`;

export const Hr = styled.hr`
  margin: 20px auto;
`;

export const ShowCategoryButton = styled(CustomButton)``;

export const HideCategoryButton = styled(ShowCategoryButton)`
  background-color: red;

  &:hover {
    background-color: red;
  }
`;

export const SmallText = styled.p`
  font-size: 16px;

  span {
    color: #cc1616;
  }
  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  p {
    font-size: 16px;
  }
`;

export const ClearButton = styled.button`
  border-radius: 10px;
  border: 2px solid black;
  margin-top: 20px;
  width: 50%;
  height: 40px;
  font-size: 18px;
  background-color: lightgray;
  cursor: pointer;
  outline: none;

  :active {
    transform: translate(0, 0.5rem);
    box-shadow: 6px 6px 6px black;

    @media screen and (max-width: 1024px) {
      transform: none;
      box-shadow: none;
    }
  }

  @media screen and (max-width: 600px) {
    width: 70%;
  }
  @media screen and (max-width: 450px) {
    width: 90%;
    font-size: 16px;
  }
  @media screen and (max-width: 320px) {
    width: 90%;
    font-size: 14px;
  }
`;

export const Amount = styled.span`
  color: #cc1616;
  font-size: 30px;
`;

export const EmailSelfButton = styled(CustomButton)`
  margin: 20px;
  background-color: whitesmoke;
  color: black;
  text-shadow: none;
`;

export const EmailPupilButton = styled(EmailSelfButton)`
  background-color: #df95f6;
`;
