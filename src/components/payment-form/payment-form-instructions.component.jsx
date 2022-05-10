import { PaymentFormInstructionsText } from "./payment-form.styles";

const PaymentFormInstructions = () => {
  return (
    <div>
      <PaymentFormInstructionsText>thank you :)</PaymentFormInstructionsText>
      <PaymentFormInstructionsText>
        please Enter your details below.
      </PaymentFormInstructionsText>
      <PaymentFormInstructionsText>
        the card details input will appear when all fields have been entered.
      </PaymentFormInstructionsText>
    </div>
  );
};

export default PaymentFormInstructions;
