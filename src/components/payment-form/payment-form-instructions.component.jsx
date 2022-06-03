import { useSelector } from "react-redux";

import { selectContactMethod } from "../../store/cart/cart.selector";
import {
  PaymentFormDiv,
  PaymentFormInstructionsText,
} from "./payment-form.styles";

const PaymentFormInstructions = () => {
  const contactMethod = useSelector(selectContactMethod);

  return (
    <>
      {contactMethod && (
        <PaymentFormDiv>
          <PaymentFormInstructionsText>
            thank you :)
          </PaymentFormInstructionsText>
          <PaymentFormInstructionsText>
            please Enter your details below.
          </PaymentFormInstructionsText>
          <PaymentFormInstructionsText>
            the card details input will appear when all fields have been
            entered.
          </PaymentFormInstructionsText>
        </PaymentFormDiv>
      )}
    </>
  );
};

export default PaymentFormInstructions;
