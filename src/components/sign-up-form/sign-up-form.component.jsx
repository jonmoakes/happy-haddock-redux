import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

// import { selectError } from "../../redux/user/user.selectors";

import Loader from "../loader/loader.component";
import CustomButton from "../custom-button/custom-button.component";

import { Form, PageLink, SmallScreenDiv } from "../../styles/form/form.styles";

import { Div } from "../../styles/div/div.styles";

import {
  okMessage,
  displayNameTooLongMessage,
  passwordsDontMatchMessage,
} from "../../strings/strings";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isLoading, setIsLoading] = useState(false);

  const { displayName, email, password, confirmPassword } = formFields;
  const swal = withReactContent(Swal);
  // const dispatch = useDispatch();
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   if (error) {
  //     setIsLoading(false);
  //     swal
  //       .fire({
  //         title: `${error}`,
  //         background: "black",
  //         backdrop: `
  //   rgba(0,0,123,0.8)`,
  //         icon: "error",
  //         confirmButtonColor: "#3085d6",
  //         confirmButtonText: `${okMessage}`,
  //         customClass: "confirm",
  //         allowOutsideClick: true,
  //       })
  //       .then(dispatch({ type: "RESET_ERROR_MESSAGE" }))
  //       .then((result) => {
  //         if (result.isConfirmed || result.isDismissed) {
  //           setUserCredentials({
  //             displayName: "",
  //             email: "",
  //             password: "",
  //             confirmPassword: "",
  //           });
  //         }
  //       });
  //   }
  // }, [error, swal, dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (displayName.length > 8) {
      setIsLoading(false);
      swal.fire({
        title: `${displayNameTooLongMessage}`,
        background: "black",
        backdrop: `
  rgba(0,0,123,0.8)`,
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: `${okMessage}`,
        customClass: "confirm",
        allowOutsideClick: false,
      });
      return;
    } else if (password !== confirmPassword) {
      setIsLoading(false);
      swal.fire({
        title: `${passwordsDontMatchMessage}`,
        background: "black",
        backdrop: `
  rgba(0,0,123,0.8)`,
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: `${okMessage}`,
        customClass: "confirm",
        allowOutsideClick: false,
      });
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      setIsLoading(false);
      resetFormFields();
    } catch (error) {
      setIsLoading(false);
      console.log("user creation encountered an error ", error);
      if (error.code === "auth/email-already-in-use") {
        swal.fire({
          title:
            "this email is already in use. Please try another email address.",
          background: "black",
          backdrop: `
  rgba(0,0,123,0.8)`,
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: `${okMessage}`,
          customClass: "confirm",
          allowOutsideClick: false,
        });
      } else {
        swal.fire({
          title: error.code,
          background: "black",
          backdrop: `
  rgba(0,0,123,0.8)`,
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: `${okMessage}`,
          customClass: "confirm",
          allowOutsideClick: false,
        });
      }
    }

    // dispatch({
    //   type: "SIGN_UP_START",
    //   payload: { email, password, displayName },
    // });
  };

  return (
    <Div>
      {isLoading && <Loader />}
      <h1>Don't Have An Acount?</h1>
      <p>sign up below! it's quick and secure!</p>

      <hr className="top" />

      <Form className="sign-in-up" onSubmit={handleSubmit}>
        <label>display name</label>
        <input
          type="text"
          name="displayName"
          value={displayName || ""}
          onChange={handleChange}
          placeholder="Max 8 Characters "
          required
        />

        <label>email</label>
        <input
          type="email"
          name="email"
          value={email || ""}
          onChange={handleChange}
          placeholder="Enter Your Email Address"
          required
        />

        <label>password</label>
        <input
          type="password"
          name="password"
          value={password || ""}
          onChange={handleChange}
          placeholder="Min 6 Characters"
          required
        />

        <label>confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword || ""}
          onChange={handleChange}
          placeholder="Confirm Your Password"
          required
        />

        <CustomButton className="sign-in-up">Sign Up</CustomButton>
      </Form>
      <SmallScreenDiv>
        <hr className="top" />
        <p>already have an account?</p>
        <PageLink to="/sign-in">Sign in!</PageLink>
        <hr className="bottom" />
      </SmallScreenDiv>
    </Div>
  );
};

export default SignUp;
