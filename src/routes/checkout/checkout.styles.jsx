import styled from "styled-components";

import CustomButton from "../../components/custom-button/custom-button.component";
import { ReactComponent as StripeSVG } from "../../assets/stripe-logo.svg";

export const HeadingContainerDiv = styled.div`
  margin-top: 150px;
  margin-bottom: 100px;

  @media screen and (max-width: 450px) {
    margin-top: 170px;
  }
`;

export const PaddedDiv = styled.div`
  padding: 0px 20px;

  .price-info {
    color: yellow;
  }

  @media screen and (max-width: 450px) {
    p {
      font-size: 16px;
    }
  }
`;

export const CheckoutPageDiv = styled.div`
  width: 85%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  padding-bottom: 200px;

  @media screen and (max-width: 375px) {
    width: 95%;
  }
`;

export const CheckoutPageHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;

  p {
    color: red;
  }
`;

export const HeaderBlock = styled.div`
  width: 33%;
`;

export const HeadingText = styled.span`
  font-size: 25px;
  color: whitesmoke;

  @media screen and (max-width: 1366px) {
    font-size: 20px;
  }

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }

  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

export const TotalPriceDiv = styled.div`
  background-color: black;
  border: 2px solid whitesmoke;
  box-shadow: 6px 6px 6px black;
  padding: 5px 20px 20px 20px;
  margin-top: 50px;
  margin-bottom: 10px;
  border-radius: 15px;

  @media screen and (max-width: 1366px) {
    box-shadow: none;
  }

  @media screen and (max-width: 450px) {
    font-size: 30px;
    padding: 15px 20px 10px 20px;
  }
`;

export const PriceNumber = styled.span`
  color: yellow;
  font-size: 50px;
  text-shadow: none;
`;

export const MinorText = styled.span`
  font-size: 20px;

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }

  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

export const TotalPriceHeading = styled.p`
  color: whitesmoke;
  margin-bottom: -5px;
  text-shadow: 1px 1px 1px black;
`;

export const InfoDiv = styled.div`
  margin: 50px auto;
  background-color: black;
  padding: 20px;
  border: 2px solid whitesmoke;
  border-radius: 15px;
  width: 50%;
  box-shadow: 6px 6px 6px black;

  p {
    text-shadow: none;
    color: yellow;
  }

  @media screen and (max-width: 1366px) {
    width: 100%;
    padding: 20px 10px;
    box-shadow: none;
  }
`;

export const StripeLogoDiv = styled.div`
  margin-top: 50px;
  p {
    font-style: italic;
  }

  @media screen and (max-width: 600px) {
    margin-top: 0px;
  }
`;

export const StripeLogo = styled(StripeSVG)`
  width: 300px;
  height: auto;
  margin-top: -70px;

  @media screen and (max-width: 600px) {
    width: 200px;
    margin-top: -40px;
  }

  @media screen and (max-width: 320px) {
    width: 100px;
    margin-top: -20px;
  }
`;
export const ClearCartDiv = styled.div`
  margin-top: 30px;
  margin-bottom: -20px;
`;

export const ClearCartButton = styled(CustomButton)`
  background-color: red;
  width: 200px;
  height: 50px;
  line-height: 40px;
  font-size: 18px;

  &:hover {
    background-color: red;
    transform: scale(1.05);
  }

  @media screen and (max-width: 600px) {
    height: 40px;
    line-height: 30px;
  }

  @media screen and (max-width: 320px) {
    width: 150px;
  }
`;
