import styled from "styled-components";

export const StyledImage = styled.img`
  width: 900px;
  height: 440px;
  border: 2px solid black;
  border-radius: 20px;
  margin: 15px auto 0px auto;

  &.loading {
    filter: blur(10px);
    clip-path: inset(0);
  }
  &.loaded {
    filter: blur(0px);
    transition: filter 0.5s linear;
  }

  @media screen and (max-width: 1366px) {
    width: 700px;
    height: 340px;
  }

  @media screen and (max-width: 820px) {
    width: 500px;
    height: 240px;
  }

  @media screen and (max-width: 650px) {
    width: 400px;
    height: 200px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
    height: 150px;
  }

  @media screen and (max-width: 350px) {
    width: 270px;
    height: 150px;
  }

  @media screen and (max-width: 280px) {
    width: 230px;
    height: 100px;
  }
`;
