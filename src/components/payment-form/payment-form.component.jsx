import { useState } from "react";

import CustomButton from "../custom-button/custom-button.component";
import ContactQuestion from "./contact-question.component";
import DemoInfo from "./demo-info.component";
import PaymentFormInstructions from "./payment-form-instructions.component";
import NameEmailPhoneForm from "./name-email-phone-form.component";

import { PaymentFormDiv } from "./payment-form.styles";

const PaymentForm = () => {
  const [okButtonClicked, setOkButtonClicked] = useState(false);
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
        </>
      )}
    </>
  );
};

export default PaymentForm;
