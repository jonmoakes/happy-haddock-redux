import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../store/user/user.selectors";

import ProductsPageCartIcon from "./products-page-cart-icon.component";
import OtherPagesCartIcon from "./other-pages-cart-icon.component";

const CartIcon = () => {
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);
  // const cartItems = useSelector(selectCartItems);

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
