import {
  PaymentFormInstructionsText,
  DemoInfoDiv,
} from "./payment-form.styles";

const PaymentFormPayNowInstructions = () => (
  <>
    <PaymentFormInstructionsText>thank you!</PaymentFormInstructionsText>
    <PaymentFormInstructionsText>
      now one last step :)
    </PaymentFormInstructionsText>
    <PaymentFormInstructionsText>
      please enter your card details and tap the{" "}
      <span className="yellow">"pay now"</span> button.
    </PaymentFormInstructionsText>
    <PaymentFormInstructionsText>
      ( The button will appear when there are no errors on the card payment form
      ).
    </PaymentFormInstructionsText>
    <DemoInfoDiv>
      <PaymentFormInstructionsText className="red">
        please note that this is a demonstration app!
      </PaymentFormInstructionsText>
      <PaymentFormInstructionsText className="red">
        please do not use a real card!
      </PaymentFormInstructionsText>
      <PaymentFormInstructionsText className="red">
        instead, use this official stripe test card.
      </PaymentFormInstructionsText>
      <PaymentFormInstructionsText className="card-number">
        <span className="heading">Card Number:</span>
        <br />
        4242 4242 4242 4242
      </PaymentFormInstructionsText>
      <PaymentFormInstructionsText className="card-number">
        <span className="heading">expiry:</span>
        <br />
        any month / year in the future - ie 06/25
      </PaymentFormInstructionsText>
      <PaymentFormInstructionsText className="card-number">
        <span className="heading">CVC code:</span>
        <br />
        any 3 numbers
      </PaymentFormInstructionsText>
    </DemoInfoDiv>
  </>
);

export default PaymentFormPayNowInstructions;
