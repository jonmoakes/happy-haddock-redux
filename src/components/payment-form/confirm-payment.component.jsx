import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import Loader from "../loader/loader.component";

import { PayButton, DisabledButton, CardInputDiv } from "./payment-form.styles";

const ConfirmPayment = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
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
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment successful!");
      }
    }
  };

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
        <PayButton
          // onChange={handleErrorChange}
          type="submit"
          onClick={paymentHandler}
        >
          Pay Now
        </PayButton>
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
