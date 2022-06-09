import { useSelector } from "react-redux";
import { format } from "date-fns";
import axios from "axios";

import useGetReceiptData from "./use-get-receipt-data";

import {
  selectCustomerDetails,
  selectCartTotal,
} from "../store/cart/cart.selector";

import { getDate, getTime } from "../reusable-functions/get-date-time";

const useSendCustomerOrderEmail = () => {
  const { receiptData } = useGetReceiptData();
  const totalPrice = useSelector(selectCartTotal);
  const customerDetails = useSelector(selectCustomerDetails);

  const { name, email } = customerDetails;

  const sendCustomerOrderEmail = async () => {
    const fullReceipt = `${receiptData}\nGrand Total:\n${totalPrice.toFixed(
      2
    )}\n\n___________________`;

    const customerEmailIntro = `Hi ${name}.

Here Is A Summary Of Your Order You Placed With The Happy Haddock Fish & Chip Shop.
    
You Will Also Receive A Separate Email Receipt For Your Records.
    
If You Have Any Queries, Please Contact Us Using The Contact Form On Our Website!
    
Thank You For Your Custom!
    
Order Date: ${format(new Date(getDate()), "dd MMMM yyyy")}
    
Order Time: ${getTime()}
    
Total Price: £${totalPrice.toFixed(2)}
 ___________________
    
Your Order Details:
___________________
`;

    const customerEmailToSend = `${customerEmailIntro} ${fullReceipt}`;

    const dataToSend = {
      email,
      customerEmailToSend,
    };
    await axios
      .post("/.netlify/functions/send-customer-order-email", {
        message: dataToSend,
      })
      .then(
        (response) => {
          if (response.status === 202) {
            console.log("EMAIL SENT!");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return { sendCustomerOrderEmail, receiptData };
};

export default useSendCustomerOrderEmail;
