import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";

import useClearCartInFirestore from "../../hooks/firestore/use-clear-cart-in-firestore";
import useAddOrderTofirestore from "../../hooks/firestore/use-add-order-to-firestore";
import useSendCustomerOrderEmail from "../../hooks/emails-and-receipt/use-send-customer-order-email";
import useSendOwnerOrderEmail from "../../hooks/emails-and-receipt/use-send-owner-order-email";
import useOrderConfirmedSwal from "../../hooks/swals/use-order-confirmed-swal";
import usePaymentResultErrorSwal from "../../hooks/swals/use-payment-result-error-swal";
import useConfirmPaymentSwal from "../../hooks/swals/use-confirm-payment-swal";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { clearCustomerDetails } from "../../store/cart/cart.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import { clearIndividualProduct } from "../../store/products/product.action";
import { clearFinalItem } from "../../store/final-item/final-item.action";

import Loader from "../loader/loader.component";

import { PayButton, DisabledButton, CardInputDiv } from "./payment-form.styles";

const ConfirmPayment = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const { clearCartInFirestore } = useClearCartInFirestore();
  const { sendCustomerOrderEmail } = useSendCustomerOrderEmail();
  const { sendOwnerOrderEmail } = useSendOwnerOrderEmail();
  const { addOrderToFirestore } = useAddOrderTofirestore();
  const { orderConfirmedSwal } = useOrderConfirmedSwal();
  const { paymentResultErrorSwal } = usePaymentResultErrorSwal();
  const { confirmPaymentSwal } = useConfirmPaymentSwal();

  const currentUser = useSelector(selectCurrentUser);
  const totalPrice = useSelector(selectCartTotal);

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const paymentHandler = async () => {
    if (!stripe || !elements) return;
    setIsProcessingPayment(true);
    const cardElement = elements.getElement("card");

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: Math.round(totalPrice * 100) }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      paymentResultErrorSwal(paymentResult);
      cardElement.clear();
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        try {
          await clearCartInFirestore();
          await addOrderToFirestore();
          await sendCustomerOrderEmail();
          await sendOwnerOrderEmail();
          orderConfirmedSwal();
          dispatch(clearCustomerDetails());
          dispatch(clearFinalItem());
          dispatch(clearIndividualProduct());
        } catch (error) {
          alert(`${error.message}`);
          console.log(error);
        }
      }
    }
  };

  function confirmPayment() {
    confirmPaymentSwal(paymentHandler);
  }

  return (
    <>
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
        />
      </CardInputDiv>

      {!isProcessingPayment ? (
        <>
          <PayButton
            // onChange={handleErrorChange}
            type="button"
            onClick={confirmPayment}
          >
            Pay Now
          </PayButton>
        </>
      ) : (
        <>
          <Loader />
          <DisabledButton type="button">Please Wait...</DisabledButton>
        </>
      )}
    </>
  );
};

export default ConfirmPayment;
