import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import { fadeInLeft } from "react-animations";

import { IosButton } from "../../components/footer/footer.styles";

const fadeLeftAnimation = keyframes`${fadeInLeft}`;

export const ShowInfoButton = styled(IosButton)`
  background-color: salmon;
  font-size: 18px;
`;

export const InfoContainer = styled.div`
  background-color: lightgrey;
  padding: 20px 10px;
  border: 2px solid black;
  border-radius: 15px;
  margin-bottom: 15px;
  animation: 1s ${fadeLeftAnimation};

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
