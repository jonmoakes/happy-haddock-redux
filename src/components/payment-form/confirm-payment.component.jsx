import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useClearCartInFirestore from "../../hooks/use-clear-cart-in-firestore";
import useAddOrderTofirestore from "../../hooks/use-add-order-to-firestore";
import useSendCustomerOrderEmail from "../../hooks/use-send-customer-order-email";
import useSendOwnerOrderEmail from "../../hooks/use-send-owner-order-email";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { clearCustomerDetails } from "../../store/cart/cart.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import { clearIndividualProduct } from "../../store/products/product.action";
import { clearFinalItem } from "../../store/final-item/final-item.action";

import Loader from "../loader/loader.component";

import { PayButton, DisabledButton, CardInputDiv } from "./payment-form.styles";

import {
  areYouSureMessage,
  confirmAddToCartMessage,
  itemAddedMessage,
  goToCartWhenReadyMessage,
  okMessage,
  cancelledMessage,
  itemNotAddedToCartMessage,
} from "../../strings/strings";

const ConfirmPayment = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const { clearCartInFirestore } = useClearCartInFirestore();
  const { sendCustomerOrderEmail } = useSendCustomerOrderEmail();
  const { sendOwnerOrderEmail } = useSendOwnerOrderEmail();
  const { addOrderToFirestore } = useAddOrderTofirestore();

  const currentUser = useSelector(selectCurrentUser);
  const totalPrice = useSelector(selectCartTotal);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const swal = withReactContent(Swal);

  const paymentHandler = async () => {
    if (!stripe || !elements) return;
    setIsProcessingPayment(true);

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
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        await clearCartInFirestore();
        swal.fire({
          title: `${itemAddedMessage}`,
          text: `${goToCartWhenReadyMessage}`,
          confirmButtonText: `${okMessage}`,
          confirmButtonColor: "#3085d6",
          background: "black",
          backdrop: `
        rgba(0,0,123,0.8)`,
          icon: "success",
          customClass: "confirm",
        });
        try {
          await addOrderToFirestore();
          await sendCustomerOrderEmail();
          await sendOwnerOrderEmail();
          dispatch(clearCustomerDetails());
          dispatch(clearFinalItem());
          dispatch(clearIndividualProduct());
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  function confirmAddItem() {
    swal
      .fire({
        title: `${areYouSureMessage}`,
        background: "black",
        backdrop: `
        rgba(0,0,123,0.8)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "red",
        confirmButtonText: `${confirmAddToCartMessage}`,
        customClass: "confirm",
        allowOutsideClick: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          paymentHandler();
        } else if (
          result.dismiss === Swal.DismissReason.cancel ||
          Swal.DismissReason.backdrop ||
          Swal.DismissReason.backdrop.esc
        ) {
          swal.fire({
            title: `${cancelledMessage}`,
            text: `${itemNotAddedToCartMessage}`,
            timer: 2000,
            showConfirmButton: false,
            background: "black",
            backdrop: `
      rgba(0,0,123,0.8)`,
            icon: "info",
            customClass: "confirm",
          });
        }
      });
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
            onClick={confirmAddItem}
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
