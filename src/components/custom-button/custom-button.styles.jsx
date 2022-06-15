import styled from "styled-components";

export const Button = styled.button`
  min-width: 165px;
  width: 400px;
  height: 100px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 25px;
  background-color: #00ff04;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 15px;
  transition: all 0.2s ease-in-out;
  outline: none;
  font-family: inherit;
  font-weight: bold;
  color: black;

  &.sign-in-up {
    margin: 50px auto 0px auto;
  }

  &.google-button {
    background-color: #fabb02;

    &:hover {
      background-color: #e94234;
    }
  }

  &.home-sign-up {
    background-color: orange;

    &:hover {
      background-color: salmon;
    }
  }

  &.forgot-password {
    background-color: black;
    color: white;

    &:hover {
      color: black;
    }
  }

  &.sum-info {
    margin-top: 20px;
  }

  @media screen and (max-width: 850px) {
    width: 70%;
    padding: 5px 5px;
    font-size: 25px;
    line-height: 10px;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
    height: 50px;
    font-size: 18px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
  }

  &:hover {
    background-color: yellow;
    transform: scale(1.05);

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
      box-shadow: none;
      background-color: #00ff04;
    }
  }

  :active {
    transform: translate(0, 0.5rem);
    box-shadow: 0 0.1rem black;
  }
`;
