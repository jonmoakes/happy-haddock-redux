import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../store/user/user.selector";
import { updateCartItems } from "../../store/cart/cart.action";

const useCartItemsSnapshotListener = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    let unsubscribeFromSnapshot = null;

    try {
      unsubscribeFromSnapshot = onSnapshot(
        doc(db, "users", currentUser.id),
        (doc) => {
          const { cartItems } = doc.data();
          dispatch(updateCartItems(cartItems));
        }
      );
    } catch (error) {
      console.log(error);
    }

    return () => {
      unsubscribeFromSnapshot();
    };
  }, [currentUser, dispatch]);
};

export default useCartItemsSnapshotListener;
