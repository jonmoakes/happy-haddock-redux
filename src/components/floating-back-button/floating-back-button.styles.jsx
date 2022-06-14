import styled from "styled-components";

export const BackButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  position: fixed;
  left: 10px;
  bottom: 22px;
  background-color: black;
  border: 2px solid whitesmoke;
  color: whitesmoke;
  z-index: 10;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 1366px) {
    height: 80px;
    width: 80px;
  }

  @media screen and (max-width: 768px) {
    height: 60px;
    width: 60px;
  }
`;

export const RelativePositionDiv = styled.div`
  position: relative;
`;
