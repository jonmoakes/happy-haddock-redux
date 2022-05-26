import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";

const slideInLeftAnimation = keyframes`${slideInLeft}`;

export const SearchBar = styled.input`
  width: 50%;
  height: 50px;
  border: 2px solid black;
  border-radius: 10px;
  outline: none;
  padding-left: 20px;
  font-family: inherit;
  margin: 0px auto 20px auto;
  font-size: 20px;
  animation: 1s ${slideInLeftAnimation};

  ::-webkit-input-placeholder {
    font-size: 16px;
  }
  ::-moz-placeholder {
    font-size: 16px;
  }
  :-ms-input-placeholder {
    font-size: 16px;
  }
  ::placeholder {
    font-size: 16px;
  }

  &:focus {
    box-shadow: 6px 6px 6px black;
    border-color: red;
  }

  /* clears the ‘X’ from Internet Explorer */
  ::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  ::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  /* clears the ‘X’ from Chrome */
  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }

  &.table-seach-bar {
    @media screen and (max-width: 850px) {
      margin: 10px auto -20px auto;
    }

    @media screen and (max-width: 600px) {
      margin: 10px auto 0px auto;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 20px auto 20px auto;
    width: 70%;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
  }

  @media screen and (max-width: 320px) {
    ::-webkit-input-placeholder {
      font-size: 13px;
    }
    ::-moz-placeholder {
      font-size: 13px;
    }
    :-ms-input-placeholder {
      font-size: 13px;
    }
    ::placeholder {
      font-size: 13px;
    }
  }
`;
