import { PageLink, SmallScreenDiv } from "../../styles/form/form.styles";

const AlreadyHaveAccount = () => (
  <SmallScreenDiv>
    <hr className="top" />
    <p>already have an account?</p>
    <PageLink to="/sign-in">Sign in!</PageLink>
    <hr className="bottom" />
  </SmallScreenDiv>
);

export default AlreadyHaveAccount;
