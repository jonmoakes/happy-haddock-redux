import { useState } from "react";
import { useSelector } from "react-redux";

import { selectShowCardInput } from "../../store/cart/cart.selector";

import CustomButton from "../custom-button/custom-button.component";
import ContactQuestion from "./contact-question.component";
import DemoInfo from "./demo-info.component";
import PaymentFormInstructions from "./payment-form-instructions.component";
import NameEmailPhoneForm from "./name-email-phone-form.component";

import { PaymentFormDiv } from "./payment-form.styles";

const PaymentForm = () => {
  const [okButtonClicked, setOkButtonClicked] = useState(false);
  const showCardInput = useSelector(selectShowCardInput);
  return (
    <>
      {!okButtonClicked ? (
        <PaymentFormDiv>
          <DemoInfo />
          <CustomButton onClick={() => setOkButtonClicked(true)}>
            ok, I Understand!
          </CustomButton>
        </PaymentFormDiv>
      ) : (
        <>
          <ContactQuestion />
          <PaymentFormInstructions />
          <NameEmailPhoneForm />
          {showCardInput && <p>card input has been shown</p>}
        </>
      )}
    </>
  );
};

export default PaymentForm;
