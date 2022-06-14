import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../../utils/firebase/firebase.utils";

import useErrorClearingCartSwal from "../../hooks/swals/use-error-clearing-cart-swal";

import { selectCurrentUser } from "../../store/user/user.selector";

const useClearCartInFirestore = () => {
  const { errorClearingCartSwal } = useErrorClearingCartSwal();
  const currentUser = useSelector(selectCurrentUser);

  const clearCartInFirestore = async () => {
    const userRef = doc(db, "users", currentUser.id);
    const userSnapshot = await getDoc(userRef);

    try {
      if (!userSnapshot.exists) return;
      await updateDoc(userRef, {
        cartItems: [],
      });
    } catch (error) {
      errorClearingCartSwal(error);
    }
  };

  return { clearCartInFirestore };
};

export default useClearCartInFirestore;
