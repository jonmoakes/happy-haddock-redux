import { CardElement } from "@stripe/react-stripe-js";

import usePaymentFormHandler from "../../hooks/handlers/use-payment-form-handler";
import useConfirmPaymentSwal from "../../hooks/swals/use-confirm-payment-swal";
import useHandlePaymentFormChange from "../../hooks/handlers/use-handle-payment-form-change";

import Errors from "./errors.component";
import Loader from "../loader/loader.component";

import { PayButton, DisabledButton, CardInputDiv } from "./payment-form.styles";
import { options } from "./card-input-options";

const ConfirmPayment = () => {
  const { isProcessingPayment, paymentFormHandler } = usePaymentFormHandler();
  const { confirmPaymentSwal } = useConfirmPaymentSwal();
  const { handleChange, error, warning, showButton } =
    useHandlePaymentFormChange();

  return (
    <>
      <Errors {...{ warning, error }} />

      <CardInputDiv>
        <CardElement {...{ options }} onChange={handleChange} />
      </CardInputDiv>

      {showButton && !isProcessingPayment ? (
        <PayButton
          onChange={handleChange}
          type="button"
          onClick={() => confirmPaymentSwal(paymentFormHandler)}
        >
          Pay Now
        </PayButton>
      ) : (
        showButton &&
        isProcessingPayment && (
          <>
            <Loader />
            <DisabledButton>Please Wait...</DisabledButton>
          </>
        )
      )}
    </>
  );
};

export default ConfirmPayment;
