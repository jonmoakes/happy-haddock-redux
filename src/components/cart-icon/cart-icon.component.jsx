import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import ProductsPageCartIcon from "./products-page-cart-icon.component";
import OtherPagesCartIcon from "./other-pages-cart-icon.component";

const CartIcon = () => {
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);

  return (
    <>
      {!currentUser ||
      (currentUser && location.pathname === "/checkout") ||
      (currentUser &&
        cartItems.length === 0) ? null : location.pathname.includes(
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
