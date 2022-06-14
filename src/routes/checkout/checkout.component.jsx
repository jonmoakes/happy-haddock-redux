import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cart.selector";
import useClearCartInFirestore from "../../hooks/firestore/use-clear-cart-in-firestore";

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
  const { clearCartInFirestore } = useClearCartInFirestore();
  const [redirectToMenu, setRedirectToMenu] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    if (cartItems && !cartItems.length) {
      clearCartInFirestore();
      setRedirectToMenu(true);
    }
  }, [cartItems, dispatch, clearCartInFirestore]);

  return (
    <HeadingContainerDiv>
      <h1>Checkout</h1>

      <CheckoutPageQuantityInstructions />
      <CheckoutPageOptionsPriceInfo />
      <CheckoutPageClearCart />
      <CheckoutPageDiv>
        <CheckoutPageHeaderBlock />

        {cartItems.length &&
          cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}

        <CheckoutPageTotalPriceInfo />
        <PaymentForm />
        <CheckoutPageStripeInfo />
        {redirectToMenu && <Navigate to="/menu" replace />}
      </CheckoutPageDiv>
    </HeadingContainerDiv>
  );
};

export default Checkout;
