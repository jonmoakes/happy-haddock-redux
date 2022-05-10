// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import { selectOkButtonClicked } from "../../redux/payment-form/payment-form.selectors";

// import usePreferredContactMethodChange from "../../custom-hooks/use-preferred-contact-method-change";

import CustomButton from "../custom-button/custom-button.component";
import ContactQuestion from "./contact-question.component";
import PaymentFormInstructions from "./payment-form-instructions.component";
import NameEmailPhoneForm from "./name-email-phone-form.component";

import {
  PaymentFormDiv,
  ContactButtonsDiv,
  ContactButton,
} from "./payment-form.styles";

import { phone } from "../../strings/options-strings";

const PaymentForm = () => {
  // const { hideButtons, chooseEmail, choosePhone } =
  //   usePreferredContactMethodChange();

  // const dispatch = useDispatch();
  // const okButtonClicked = useSelector(selectOkButtonClicked);

  return (
    <PaymentFormDiv>
      {/* {!okButtonClicked && (
        <>
          <p>please note that this is a demonstration app.</p>
          <p>please do not use a real card!</p>
          <p>full details will be shown before the payment option appears :)</p>
          <p>
            you can view the{" "}
            <a href="https://stripe.com/docs/testing">stripe documentation</a>{" "}
            and scroll down to "basic test card numbers" for more information.
          </p>
          <p>
            You will receive an "order summary" of your demonstration order.
          </p>
          <p>
            a live app would also email a customer a full stripe receipt for
            their records.
          </p>
          <p>
            please, <Link to="/contact">contact me</Link> with any questions. :)
          </p>
          <CustomButton onClick={() => dispatch({ type: "OK_BUTTON_CLICKED" })}>
            ok, I Understand!
          </CustomButton>
        </>
      )} */}

      {/* {okButtonClicked && !hideButtons && ( */}
      <>
        <ContactQuestion />

        <ContactButtonsDiv>
          <ContactButton
          // onClick={() => dispatch({ type: "CHOOSE_EMAIL" })}
          >
            email
          </ContactButton>
          <ContactButton
            className={phone}
            // onClick={() => dispatch({ type: "CHOOSE_PHONE" })}
          >
            phone
          </ContactButton>
        </ContactButtonsDiv>
      </>
      {/* )} */}

      {/* {(chooseEmail || choosePhone) && ( */}
      <>
        <PaymentFormInstructions />
        <NameEmailPhoneForm />
      </>
      {/* )} */}
    </PaymentFormDiv>
  );
};

export default PaymentForm;
