import { PageLink, SmallScreenDiv } from "../../styles/form/form.styles";

const NoAccount = () => (
  <SmallScreenDiv>
    <hr className="top" />
    <p>no account yet?</p>
    <PageLink to="/sign-up">Sign up!</PageLink>
    <hr className="bottom" />
  </SmallScreenDiv>
);

export default NoAccount;
