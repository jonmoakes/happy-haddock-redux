import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import { fadeInLeft, fadeInRight } from "react-animations";

import { IosButton } from "../../components/footer/footer.styles";

const fadeLeftAnimation = keyframes`${fadeInLeft}`;
const fadeRightAnimation = keyframes`${fadeInRight}`;

export const FadeInLeftDiv = styled.div`
  animation: 1s ${fadeLeftAnimation};
`;

export const FadeInRightDiv = styled.div`
  animation: 1s ${fadeRightAnimation};
`;

export const ShowInfoButton = styled(IosButton)`
  background-color: salmon;
  font-size: 18px;
`;

export const InfoContainer = styled.div`
  background-color: lightgrey;
  padding: 20px 10px;
  border: 2px solid black;
  border-radius: 10px;
  margin-bottom: 15px;

  p {
    color: black;
    text-shadow: none;
  }

  a {
    color: red;
    text-decoration: none;

    &:hover {
      color: yellow;
      text-shadow: 1px 1px 1px black;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;

  &:hover {
    color: yellow;
    text-shadow: 1px 1px 1px black;
  }
`;

export const CloseInfoButton = styled(IosButton)`
  background-color: red;
  font-size: 18px;
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
  border: 2px solid black;
  border-radius: 20px;
  margin: 15px auto 0px auto;

  @media screen and (max-width: 1366px) {
    width: 70%;
  }
`;
