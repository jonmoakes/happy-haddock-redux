import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import { bounceInDown } from "react-animations";

const bounceInDownAnimation = keyframes`${bounceInDown}`;

// PwadDiv margin and padding bottom and media 600px compensates for main container styling

export const PwaDiv = styled.div`
  width: 50%;
  height: auto;
  margin: -120px auto 0px auto;
  padding-bottom: 100px;

  p {
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }

    @media screen and (max-width: 450px) {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    margin: -60px auto 0px auto;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
  }
`;

export const IosButton = styled.button`
  background-color: #64d2ff;
  border: 2px solid black;
  margin: 0px 5px;
  border-radius: 15px;
  cursor: pointer;
  text-align: center;
  width: 250px;
  height: 50px;
  outline: none;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
  font-family: inherit;
  text-transform: capitalize;
  color: black;

  &:active {
    transform: translate(0, 0.3rem);

    @media screen and (max-width: 1024px) {
      transform: none;
    }
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 6px 6px 6px black;

    @media screen and (max-width: 1024px) {
      transform: none;
      transition: none;
      box-shadow: none;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 10px auto;
  }

  @media screen and (max-width: 280px) {
    width: 200px;
  }
`;

export const AndroidButton = styled(IosButton)`
  background-color: #a0bf36;
`;

export const InstructionsDiv = styled.div`
  width: 90%;
  height: auto;
  animation: 1s ${bounceInDownAnimation};
  background-color: lightgrey;
  border: 2px solid black;
  border-radius: 15px;
  margin: 20px auto 20px auto;
  padding: 20px;

  p {
    color: black;
    text-shadow: none;
    font-size: 18px;

    @media screen and (max-width: 600px) {
      font-size: 16px;
    }

    @media screen and (max-width: 450px) {
      font-size: 14px;
    }
  }

  span {
    font-size: 16px;
    color: black;

    @media screen and (max-width: 450px) {
      font-size: 14px;
    }
  }

  .link {
    text-transform: lowercase;
    font-size: 18px;

    @media screen and (max-width: 600px) {
      font-size: 16px;
    }

    @media screen and (max-width: 450px) {
      font-size: 14px;
    }
  }

  &.ios {
    background-color: #64d2ff;
  }

  &.android {
    background-color: #a0bf36;
  }

  @media screen and (max-width: 1024px) {
    padding: 20px 20px;
  }

  @media screen and (max-width: 450px) {
    padding: 10px 10px;
  }
`;

export const PrivacyDiv = styled.div`
  margin: 30px 0px;
`;

export const PrivacyLink = styled(Link)`
  padding: 10px;
`;

export const CopywriteText = styled.p`
  margin-bottom: 20px;
  font-size: 15px;
  padding: 0px 10px;
`;

export const WebLink = styled.a`
  font-size: 15px;
  text-decoration: none;
  padding-bottom: 100px;
  text-shadow: 1px 1px 1px black;

  &:hover {
    text-decoration: underline;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  margin-top: 40px;
`;
