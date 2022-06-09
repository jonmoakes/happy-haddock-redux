import { useSelector } from "react-redux";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartItems } from "../../store/cart/cart.selector";

const useUpdateItemsInFirestore = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);

  const updateCartItemInFirestore = async () => {
    const userRef = await doc(db, "users", currentUser.id);
    const userSnapshot = await getDoc(userRef);

    try {
      if (!userSnapshot.exists) return;
      await updateDoc(userRef, {
        cartItems: cartItems,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { updateCartItemInFirestore };
};

export default useUpdateItemsInFirestore;
