import { useState, useMemo } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useClearCartInFirestore from "../../hooks/use-clear-cart-in-firestore";
import useReceipt from "../../hooks/receipts/use-receipt";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { clearIndividualProduct } from "../../store/products/product.action";
import { clearFinalItem } from "../../store/final-item/final-item.action";

import Loader from "../loader/loader.component";

import { getDate, getTime } from "../../reusable-functions/get-date-time";

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

const ConfirmPayment = ({ customerDetails }) => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const { clearCartInFirestore } = useClearCartInFirestore();
  const { receipt } = useReceipt();

  const currentUser = useSelector(selectCurrentUser);
  const totalPrice = useSelector(selectCartTotal);

  const priceCut = totalPrice * 0.1;
  const cutToTwoDecimalPoints = priceCut.toFixed(2);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const swal = withReactContent(Swal);

  const { name, email, phoneNumber } = customerDetails;

  const receiptData = useMemo(
    () => receipt.map(({ formattedFinalReceipt }) => formattedFinalReceipt),
    [receipt]
  );

  const fullReceipt = `${receiptData}\n\nGrand Total:\n${totalPrice.toFixed(
    2
  )}\n\n___________________`;

  console.log(fullReceipt);

  const firestoreOrderDetails = {
    id: uuidv4(),
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    order: fullReceipt,
    orderDate: getDate(),
    orderTime: getTime(),
    totalPrice: totalPrice.toFixed(2),
    solarisAppsCut: cutToTwoDecimalPoints,
  };

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
        const ordersRef = doc(db, "users", process.env.REACT_APP_APP_OWNER_ID);
        const userSnapshot = await getDoc(ordersRef);
        try {
          if (!userSnapshot.exists) return;
          const data = await userSnapshot.data();
          const { orders } = data;
          await updateDoc(ordersRef, {
            orders: [...orders, firestoreOrderDetails],
          });
          swal
            .fire({
              title: `${itemAddedMessage}`,
              text: `${goToCartWhenReadyMessage}`,
              confirmButtonText: `${okMessage}`,
              confirmButtonColor: "#3085d6",
              background: "black",
              backdrop: `
          rgba(0,0,123,0.8)`,
              icon: "success",
              customClass: "confirm",
            })
            .then(clearCartInFirestore())
            .then(dispatch(clearFinalItem()))
            .then(dispatch(clearIndividualProduct()));
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
        <PayButton
          // onChange={handleErrorChange}
          type="button"
          onClick={confirmAddItem}
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
