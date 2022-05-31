import styled from "styled-components";

export const Div = styled.div`
  margin: 25px auto;
  width: 90%;
  height: auto;

  h2 {
    color: whitesmoke;
  }

  hr {
    &.top {
      margin-bottom: 45px;
    }

    &.bottom {
      margin-top: 55px;
    }

    &.normal {
      width: 100%;
    }

    @media screen and (max-width: 450px) {
      &.top {
        margin-bottom: 25px;
      }

      &.bottom {
        margin-top: 35px;
      }
    }
  }

  &.no-entries {
    background-color: salmon;
    height: 100px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px auto;
    border: 2px solid black;
    border-radius: 15px;

    p {
      @media screen and (max-width: 450px) {
        font-size: 16px;
      }
    }

    @media screen and (max-width: 850px) {
      width: 70%;
      padding: 0px 10px;
    }

    @media screen and (max-width: 450px) {
      width: 90%;
      padding: 0px 10px;
    }
  }

  &.products-div {
    margin: 20px auto;
    border-radius: 15px;

    h1 {
      color: whitesmoke;
    }
  }
`;
