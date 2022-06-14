import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartItems } from "../../store/cart/cart.selector";

import ProductsPageCartIcon from "./products-page-cart-icon.component";
import OtherPagesCartIcon from "./other-pages-cart-icon.component";

const CartIcon = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const location = useLocation();

  return (
    <>
      {!currentUser ||
      (currentUser && location.pathname === "/checkout") ||
      (currentUser && !cartItems.length) ? null : location.pathname.includes(
          "product"
        ) ? (
        <ProductsPageCartIcon />
      ) : (
        <OtherPagesCartIcon />
      )}
    </>
  );
};

export default CartIcon;
