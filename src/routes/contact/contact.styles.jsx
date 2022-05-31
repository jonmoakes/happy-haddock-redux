import styled from "styled-components";

export const ContactDiv = styled.div`
  margin: 0px auto 50px auto;
  width: 70%;
  height: auto;
  background-color: black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px 20px 30px 20px;

  p {
    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 80%;
  }

  @media screen and (max-width: 450px) {
    padding: 40px 20px 30px 20px;
  }

  @media screen and (max-width: 280px) {
    padding: 40px 10px 50px 10px;
  }
`;
