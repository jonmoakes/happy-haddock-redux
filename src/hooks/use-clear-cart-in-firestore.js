import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../store/user/user.selector";

const useClearCartInFirestore = () => {
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
      console.log(error);
    }
  };

  return { clearCartInFirestore };
};

export default useClearCartInFirestore;
