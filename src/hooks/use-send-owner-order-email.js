import { useSelector } from "react-redux";
import { format } from "date-fns";
import axios from "axios";

import useGetReceiptData from "./use-get-receipt-data";

import {
  selectCustomerDetails,
  selectCartTotal,
} from "../store/cart/cart.selector";

import { getDate, getTime } from "../reusable-functions/get-date-time";

const useSendOwnerOrderEmail = () => {
  const { receiptData } = useGetReceiptData();
  const totalPrice = useSelector(selectCartTotal);
  const customerDetails = useSelector(selectCustomerDetails);

  const { name, email, phoneNumber } = customerDetails;

  const sendOwnerOrderEmail = async () => {
    const fullReceipt = `${receiptData}\nGrand Total:\n${totalPrice.toFixed(
      2
    )}\n\n___________________`;

    const ownerEmailIntro = `______________________________________________

REMINDER:
TO REPLY TO THE CUSTOMER BY EMAIL, 
PLEASE CLICK ON THEIR EMAIL LINK BELOW.
DO NOT REPLY TO THIS VERY MESSAGE 
AS THE CUSTOMER WILL NOT RECEIVE IT
______________________________________________
    
You Can View More Details About The Order In Your Stripe Dashboard:
https://dashboard.stripe.com
______________________________________________
    
You Received An Order From: 
${name}
    
Their Email Address: 
${email.toLowerCase()}
    
Their Phone Number ( Blank If Not Provided ): 
${phoneNumber}
    
Order Date: ${format(new Date(getDate()), "dd MMMM yyyy")}
    
Order Time: ${getTime()}
______________________________________________
    
Order Details:  
`;
    const ownerEmailToSend = `${ownerEmailIntro} ${fullReceipt}`;

    const dataToSend = { ownerEmailToSend };
    await axios
      .post("/.netlify/functions/send-owner-order-email", {
        message: dataToSend,
      })
      .then(
        (response) => {
          if (response.status === 202) {
            console.log("OWNER EMAIL SENT!");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return { sendOwnerOrderEmail, receiptData };
};

export default useSendOwnerOrderEmail;
