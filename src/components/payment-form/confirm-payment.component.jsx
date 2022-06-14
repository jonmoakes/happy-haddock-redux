import { CardElement } from "@stripe/react-stripe-js";

import usePaymentFormHandler from "../../hooks/handlers/use-payment-form-handler";
import useConfirmPaymentSwal from "../../hooks/swals/use-confirm-payment-swal";
import useHandlePaymentFormErrorChange from "../../hooks/handlers/use-handle-payment-form-error-change";

import Errors from "./errors.component";
import Loader from "../loader/loader.component";

import { PayButton, DisabledButton, CardInputDiv } from "./payment-form.styles";

const ConfirmPayment = () => {
  const { isProcessingPayment, paymentFormHandler } = usePaymentFormHandler();
  const { confirmPaymentSwal } = useConfirmPaymentSwal();
  const {
    handlePaymentFormErrorChange,
    checkoutErrorMessage,
    warningMessage,
    showPayButton,
  } = useHandlePaymentFormErrorChange();

  return (
    <>
      <Errors {...{ warningMessage, checkoutErrorMessage }} />

      <CardInputDiv>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                "::placeholder": {
                  color: "blue",
                },
              },
            },
            hidePostalCode: true,
          }}
          onChange={handlePaymentFormErrorChange}
        />
      </CardInputDiv>

      {showPayButton && !isProcessingPayment ? (
        <PayButton
          onChange={handlePaymentFormErrorChange}
          type="button"
          onClick={() => confirmPaymentSwal(paymentFormHandler)}
        >
          Pay Now
        </PayButton>
      ) : (
        showPayButton &&
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
