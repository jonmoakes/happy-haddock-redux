// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import { v4 as uuidv4 } from "uuid";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../utils/firebase/firebase.utils";

// import useGetFinalItem from "./use-get-final-item";

// import { clearFinalItem } from "../store/final-item/final-item.action";
// import {
//   selectCartTotal,
//   selectCustomerDetails,
// } from "../store/cart/cart.selector";
// import { clearIndividualProduct } from "../store/products/product.action";

// import { getDate, getTime } from "../reusable-functions/get-date-time";

// import {
//   areYouSureMessage,
//   confirmAddToCartMessage,
//   itemAddedMessage,
//   goToCartWhenReadyMessage,
//   okMessage,
//   cancelledMessage,
//   itemNotAddedToCartMessage,
// } from "../strings/strings";

// const useAddOrderToFirestore = () => {
//   const [nav, setNav] = useState(false);
//   const { finalItem } = useGetFinalItem();
//   const swal = withReactContent(Swal);
//   const dispatch = useDispatch();

//   const totalPrice = useSelector(selectCartTotal);
//   const priceCut = totalPrice * 0.1;
//   const cutToTwoDecimalPoints = priceCut.toFixed(2);

//   const addOrderToFirestore = async () => {
//     const ordersRef = doc(db, "users", process.env.REACT_APP_APP_OWNER_ID);
//     const userSnapshot = await getDoc(ordersRef);

// const firestoreOrderDetails = {
//   id: uuidv4(),
//   //   name: name,
//   //   email: email,
//   //   phoneNumber: phoneNumber,
//   //   order: finalItem,
//   orderDate: getDate(),
//   orderTime: getTime(),
//   totalPrice: totalPrice.toFixed(2),
//   solarisAppsCut: cutToTwoDecimalPoints,
// };

// try {
//   if (!userSnapshot.exists) return;
//   const data = userSnapshot.data();
//   const { orders } = data;
//   await updateDoc(ordersRef, {
//     orders: [...orders, firestoreOrderDetails],
//   });
// } catch (error) {
//   console.log(error);
// }

//   function confirmAddItem() {
//     swal
//       .fire({
//         title: `${areYouSureMessage}`,
//         background: "black",
//         backdrop: `
//     rgba(0,0,123,0.8)`,
//         icon: "question",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "red",
//         confirmButtonText: `${confirmAddToCartMessage}`,
//         customClass: "confirm",
//         allowOutsideClick: false,
//         reverseButtons: true,
//       })
//       .then((result) => {
//         if (result.isConfirmed) {
//           swal
//             .fire({
//               title: `${itemAddedMessage}`,
//               text: `${goToCartWhenReadyMessage}`,
//               confirmButtonText: `${okMessage}`,
//               confirmButtonColor: "#3085d6",
//               background: "black",
//               backdrop: `
//   rgba(0,0,123,0.8)`,
//               icon: "success",
//               customClass: "confirm",
//             })
//             .then(addCartItemToFirestore())
//             .then(dispatch(clearFinalItem()))
//             .then(dispatch(clearIndividualProduct()))
//             .then(setNav(true));
//         } else if (
//           result.dismiss === Swal.DismissReason.cancel ||
//           Swal.DismissReason.backdrop ||
//           Swal.DismissReason.backdrop.esc
//         ) {
//           swal.fire({
//             title: `${cancelledMessage}`,
//             text: `${itemNotAddedToCartMessage}`,
//             timer: 2000,
//             showConfirmButton: false,
//             background: "black",
//             backdrop: `
//   rgba(0,0,123,0.8)`,
//             icon: "info",
//             customClass: "confirm",
//           });
//         }
//       });
//   };

//   return { addOrderToFirestore };
// };

// export default useAddOrderToFirestore;
