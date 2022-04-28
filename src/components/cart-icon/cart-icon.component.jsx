import { useContext } from "react";
import { useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { selectCartItems } from "../../redux/cart/cart.selectors";
// import { selectCurrentUser } from "../../redux/user/user.selectors";

import { UserContext } from "../../contexts/user.context";

import ProductsPageCartIcon from "./products-page-cart-icon.component";
import OtherPagesCartIcon from "./other-pages-cart-icon.component";

const CartIcon = () => {
  const location = useLocation();
  const { currentUser } = useContext(UserContext);
  // const cartItems = useSelector(selectCartItems);
  // const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      {!currentUser ? null : location.pathname.includes("/products") ? (
        <ProductsPageCartIcon />
      ) : (
        <OtherPagesCartIcon />
      )}
    </>
  );
};

export default CartIcon;
