import { Link } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import { ErrorImageContainer, ErrorImageText } from "./error-fallback.styles";

const ErrorFallback = () => (
  <ErrorImageContainer imageUrl="https://i.imgur.com/g3hgqe8.png">
    <ErrorImageText>
      Sorry, Something Has Broken! :( Please Try Checking Your internet
      Connection.
    </ErrorImageText>

    <ErrorImageText>
      Or You Can Click{" "}
      <Link to="/">
        <span style={{ textShadow: "1px 1px 1px black" }}>Here</span>
      </Link>{" "}
      To Try Returning To Our Home Page.
    </ErrorImageText>

    <ErrorImageText>
      if that doesn't work, click the button below to try reloading the page.
    </ErrorImageText>
    <CustomButton onClick={() => window.location.reload()}>
      reload the page
    </CustomButton>

    <ErrorImageText>
      finally, if that doesn't work, please <Link to="contact">Contact me</Link>
    </ErrorImageText>
  </ErrorImageContainer>
);

export default ErrorFallback;
