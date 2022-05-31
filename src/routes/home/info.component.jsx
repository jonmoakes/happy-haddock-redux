import { CloseInfoButton, InfoContainer, StyledLink } from "./home.styles";

const Info = ({ showInfo, toggleHomePageInfo }) => {
  return (
    <>
      {showInfo && (
        <InfoContainer>
          <p>
            the happy haddock is a fully functioning{" "}
            <a href="https://web.dev/what-are-pwas/">progressive web app</a>{" "}
            featuring a secure login system and full payment flow ( using a test
            credit card only of course )!
          </p>

          <p>
            it has been designed so that you can see exactly how an app like
            this would work for your business.
          </p>

          <hr />

          <p>
            it doesn't have to be a fish & chip store...It could be tailored to
            any business that sells products online.
          </p>

          <p>
            for more information and a full demo of how the app owner dashboard
            would work, please <StyledLink to="/contact">Contact me</StyledLink>
          </p>

          <p>I hope to hear from you soon!</p>
          <p>jonathan :)</p>

          <hr />
          <CloseInfoButton onClick={toggleHomePageInfo}>close</CloseInfoButton>
        </InfoContainer>
      )}
    </>
  );
};

export default Info;
