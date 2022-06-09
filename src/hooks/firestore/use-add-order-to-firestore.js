import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";
import { format } from "date-fns";

import useGetReceiptData from "../emails-and-receipt/use-get-receipt-data";

import {
  selectCustomerDetails,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import { getDate, getTime } from "../../reusable-functions/get-date-time";

const useAddOrderTofirestore = () => {
  const { receiptData } = useGetReceiptData();

  const customerDetails = useSelector(selectCustomerDetails);
  const totalPrice = useSelector(selectCartTotal);
  const { name, email, phoneNumber } = customerDetails;

  const cutToTwoDecimalPoints = totalPrice.toFixed(2) * (0.1).toFixed(2);

  const fullReceipt = `${receiptData}\nGrand Total:\n${totalPrice.toFixed(
    2
  )}\n\n___________________`;

  const firestoreOrderDetails = {
    id: uuidv4(),
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    order: fullReceipt,
    orderDate: `${format(new Date(getDate()), "dd MMMM yyyy")}`,
    orderTime: getTime(),
    totalPrice: totalPrice.toFixed(2),
    solarisAppsCut: cutToTwoDecimalPoints,
  };

  const addOrderToFirestore = async () => {
    const ordersRef = doc(db, "users", process.env.REACT_APP_APP_OWNER_ID);
    const userSnapshot = await getDoc(ordersRef);

    try {
      if (!userSnapshot.exists) return;
      const data = await userSnapshot.data();
      const { orders } = data;

      await updateDoc(ordersRef, {
        orders: [...orders, firestoreOrderDetails],
      })
        .then(
          await updateDoc(ordersRef, {
            newOrder: true,
          })
        )
        .then(
          await updateDoc(ordersRef, {
            newOrder: false,
          })
        );
    } catch (error) {
      alert(
        `Error Adding Order To Database - Please Contact The Owner Via The Contact Form To Confirm Your Order. The Error We Received Was ${error.message}.`
      );
      console.log(error);
    }
  };

  return { addOrderToFirestore };
};

export default useAddOrderTofirestore;
