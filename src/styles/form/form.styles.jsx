import styled from "styled-components";
import { Link } from "react-router-dom";

import CustomButton from "../../components/custom-button/custom-button.component";

export const Form = styled.form`
  width: 100%;
  padding: 50px 30px;

  &.name-email-phone {
    padding: 20px 0px;
  }

  &.sign-in-up {
    width: 50%;
    margin: 0px auto;
    padding: 0px 30px;

    h2 {
      color:whitesmoke;
      text-decoration:none;
    }

      hr {
    width:10%;
  }

    @media screen and (max-width: 850px) {
      width: 80%;
    }
  }

  @media screen and (max-width: 850px) {
    padding: 10px 20px;
  }

  @media screen and (max-width: 450px) {
    padding: 20px 10px;


  }

  label {
    float: left;
    font-size: 18px;
    color: #ffe61b;

    &.forgot-password {
      color:whitesmoke;
      float:unset;
    }

    @media screen and (max-width: 450px) {
      font-size: 16px;
    }
  }

  input {
    width: 100%;
    height: 50px;
    padding: 12px;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px 2px black;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: "inherit"
    outline: none;

    &.reset-pass-input {
      margin-top:20px;
      margin-bottom:50px;
    }

    &.email {
      text-transform: lowercase;

      ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        text-transform: capitalize;
      }
      ::-moz-placeholder {
        /* Firefox 19+ */
        text-transform: capitalize;
      }
      :-ms-input-placeholder {
        /* IE 10+ */
        text-transform: capitalize;
      }
      :-moz-placeholder {
        /* Firefox 18- */
        text-transform: capitalize;
      }
    }

    &.capitalize {
      text-transform: capitalize;
    }

    :focus {
      border: 2px solid salmon;
    }

    @media screen and (max-width: 450px) {
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
    }

    @media screen and (max-width: 280px) {
      ::-webkit-input-placeholder {
        font-size: 10px;
      }
      ::-moz-placeholder {
        font-size: 10px;
      }
      :-ms-input-placeholder {
        font-size: 10px;
      }
      ::placeholder {
        font-size: 10px;
      }
    }

    &:focus {
      box-shadow: 4px 4px 4px black;
      border-color: salmon;
    }

    @media screen and (max-width: 600px) {
      height: 50px;
      font-size: 18px;
    }

    @media screen and (max-width: 450px) {
      font-size: 16px;
    }

    @media screen and (max-width: 320px) {
      height: 40px;
    }
  }

  textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px 2px black;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    font-size: 18px;
    height: 200px;
    font-family: "inherit";
    outline: none;
      text-transform: capitalize;
    

    &:focus {
      box-shadow: 4px 4px 4px black;
      border-color: salmon;
    }

    @media screen and (max-width: 450px) {
      font-size: 16px;
    }
  }

  

  span {
    font-size: 16px;

    &.up-arrow {
      color: whitesmoke;
      font-size: 25px;
    }

    &.error-message {
      color:red
    }

    &.heading {
      color: whitesmoke;
      text-transform: capitalize;
      font-size: 24px;

      @media screen and (max-width: 600px) {
        font-size: 18px;
      }
    }
  }
`;

export const SmallScreenDiv = styled.div`
  display: none;
  @media screen and (max-width: 850px) {
    display: block;
  }
`;

export const PageLink = styled(Link)`
  color: whitesmoke;

  &:hover {
    color: yellow;
    text-decoration: none;

    @media screen and (max-width: 1366px) {
      color: whitesmoke;
      text-decortation: none;
    }
  }
`;

export const ContactFormButton = styled(CustomButton)`
  margin-top: -20px;
  margin-bottom: 20px;
  width: 500px;

  @media screen and (max-width: 1366px) {
    width: 400px;
  }

  @media screen and (max-width: 850px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
    font-size: 18px;
  }

  @media screen and (max-width: 450px) {
    height: 75px;
  }

  @media screen and (max-width: 320px) {
    width: 250px;
  }

  @media screen and (max-width: 280px) {
    width: 200px;
  }
`;

export const DisabledContactButton = styled(ContactFormButton)`
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
`;

export const ErrorDiv = styled.div`
  background-color: red;
  width: 70%;
  height: auto;
  margin: 0 auto;
  border-radius: 15px;

  &.sign-in {
    background-color: black;
  }

  &.table-error {
    width: 70%;
    border: 2px solid black;
    margin: 40px auto;

    h2 {
      color: black;
      text-shadow: none;
    }

    p {
      font-size: 20px;
      &.emoji {
        font-size: 50px;
        margin: -10px auto -30px auto;
      }
    }

    ul {
      margin-top: 20px;
    }

    li {
      color: black;
      text-shadow: none;
    }

    @media screen and (max-width: 1366px) {
      width: 90%;
    }

    @media screen and (max-width: 450px) {
      padding: 5px;
    }
  }

  p {
    color: whitesmoke;
    font-size: 18px;
    padding: 10px 0px;
    text-shadow: 1px 1px 1px black;
  }

  &.warning {
    background-color: orange;
    p {
      color: black;
      text-shadow: none;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 90%;
  }
`;

export const ForgotPasswordSelectDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px auto;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
