import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

import CustomButton from "../../components/custom-button/custom-button.component";

import { Div } from "../../styles/div/div.styles";

const SignInUpLinks = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <Div>
      {currentUser ? (
        <Link to="/menu">
          <CustomButton>Order Online</CustomButton>
        </Link>
      ) : (
        <>
          <p>already have an account?</p>
          <Link to="/sign-in">
            <CustomButton className="home-sign-in">sign in!</CustomButton>
          </Link>
          <p>or</p>
          <Link to="/sign-up">
            <CustomButton className="home-sign-up">sign up!</CustomButton>
          </Link>

          <p>it's quick and easy!</p>
        </>
      )}
    </Div>
  );
};

export default SignInUpLinks;
