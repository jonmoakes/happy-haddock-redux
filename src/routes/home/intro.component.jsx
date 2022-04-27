import { useState } from "react";

import FishAndChips from "../../assets/fish-and-chips-large.jpg";

import {
  FadeInLeftDiv,
  FadeInRightDiv,
  Image,
  ShowInfoButton,
  CloseInfoButton,
  InfoContainer,
  StyledLink,
} from "./home.styles";

import { Div } from "../../styles/div/div.styles";

const Intro = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Div>
      <FadeInLeftDiv>
        <h1>welcome to the happy haddock!</h1>
      </FadeInLeftDiv>

      <FadeInRightDiv>
        <hr />
      </FadeInRightDiv>

      <FadeInLeftDiv>
        <h2 style={{ color: "whitesmoke" }}>
          please note that this is a demonstration app! :)
        </h2>
      </FadeInLeftDiv>

      {!showInfo && (
        <>
          <FadeInRightDiv>
            <hr />
          </FadeInRightDiv>
          <FadeInLeftDiv>
            <ShowInfoButton onClick={() => setShowInfo(true)}>
              find out more
            </ShowInfoButton>
          </FadeInLeftDiv>
          <FadeInRightDiv>
            <hr />
          </FadeInRightDiv>
        </>
      )}

      {showInfo && (
        <InfoContainer>
          <FadeInLeftDiv>
            <p>
              the happy haddock is a fully functioning{" "}
              <a href="https://web.dev/what-are-pwas/">progressive web app</a>{" "}
              featuring a secure login system and full payment flow ( using a
              test credit card only of course )!
            </p>
          </FadeInLeftDiv>

          <FadeInRightDiv>
            <p>
              it has been designed so that you can see exactly how an app like
              this would work for your business.
            </p>
          </FadeInRightDiv>

          <FadeInLeftDiv>
            <hr />
          </FadeInLeftDiv>

          <FadeInRightDiv>
            <p>
              it doesn't have to be a fish & chip store...It could be tailored
              to any business that sells products online.
            </p>
          </FadeInRightDiv>

          <FadeInLeftDiv>
            <p>
              for more information and a full demo of how the app owner
              dashboard would work, please{" "}
              <StyledLink to="/contact">Contact me</StyledLink>
            </p>
          </FadeInLeftDiv>

          <FadeInRightDiv>
            <p>I hope to hear from you soon!</p>
            <p>jonathan :)</p>
          </FadeInRightDiv>

          <FadeInLeftDiv>
            <hr />
          </FadeInLeftDiv>

          <FadeInRightDiv>
            <CloseInfoButton onClick={() => setShowInfo(false)}>
              close
            </CloseInfoButton>
          </FadeInRightDiv>
        </InfoContainer>
      )}
      <FadeInLeftDiv>
        <Image src={FishAndChips} alt="fish and chips" />
      </FadeInLeftDiv>
    </Div>
  );
};

export default Intro;
