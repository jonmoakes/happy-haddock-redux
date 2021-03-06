import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cart.selector";
import useUpdateItemsInFirestore from "../../hooks/firestore/use-update-cart-items-in-firestore";

import CheckoutPageQuantityInstructions from "./checkout-quantity-instructions.component";
import CheckoutPageClearCart from "./checkout-clear-cart.component";
import CheckoutPageHeaderBlock from "./checkout-header-block.component";
import CheckoutPageOptionsPriceInfo from "./checkout-options-price-info.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CheckoutPageTotalPriceInfo from "./checkout-total-price-info.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import CheckoutPageStripeInfo from "./checkout-stripe-info.component";

import { HeadingContainerDiv, CheckoutPageDiv } from "./checkout.styles";

const Checkout = () => {
  const { updateCartItemsInFirestore } = useUpdateItemsInFirestore();
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    return () => {
      updateCartItemsInFirestore();
    };
  }, [updateCartItemsInFirestore]);

  window.onbeforeunload = function () {
    return false;
  };

  return (
    <>
      {!cartItems.length && <Navigate to="/menu" replace />}
      <HeadingContainerDiv>
        <h1>Checkout</h1>

        <CheckoutPageQuantityInstructions />
        <CheckoutPageOptionsPriceInfo />
        <CheckoutPageClearCart />
        <CheckoutPageDiv>
          <CheckoutPageHeaderBlock />

          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <p>your cart is empty</p>
          )}

          <CheckoutPageTotalPriceInfo />
          <PaymentForm />
          <CheckoutPageStripeInfo />
        </CheckoutPageDiv>
      </HeadingContainerDiv>
    </>
  );
};

export default Checkout;
