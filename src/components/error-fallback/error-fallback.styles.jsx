import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
  height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 125px;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 50vh;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 12px 12px 12px black;
  background-color: #e2284a;

  @media only screen and (max-width: 410px) {
    width: 40vh;
    height: 80vh;
  }
`;

export const ErrorImageText = styled.p`
  font-size: 18px;
  color: black;
  text-align: center;
  padding: 5px 5px 5px 5px;
`;
