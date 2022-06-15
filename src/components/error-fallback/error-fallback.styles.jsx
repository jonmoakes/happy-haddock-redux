import styled from "styled-components";

export const ErrorImageContainer = styled.div`
  width: 50%;
  height: 50%;
  margin: 125px auto 0px auto;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 12px 12px 12px black;
  background-color: #e2284a;

  @media screen and (max-width: 1366px) {
    box-shadow: none;
    width: 80%;
    height: 80%;
  }
`;

export const ErrorImageText = styled.p`
  font-size: 18px;
  color: black;
  padding: 5px;
  text-shadow: none;
`;
