import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { firestore } from "../../firebase/firebase.utils";

import {
  ShowTableOrderChoiceButton,
  HideTableOrderChoiceButton,
  TableOrderSelectButton,
} from "./orders-table.styles";
import { BounceInDownDiv } from "../styles/bounce-in-down-div/bounce-in-down-div.styles";

import { okMessage } from "../../strings/strings";

import "../styles/confirm.css";

const ChooseTableOrderChoice = ({ rows }) => {
  const [showTableOrderChoice, setShowTableOrderChoice] = useState(false);
  const [chosenTableOrder, setChosenTableOrder] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const swal = withReactContent(Swal);

  const tableOrder = [
    [
      "orderDate",
      "orderTime",
      "order",
      "name",
      "email",
      "phoneNumber",
      "totalPrice",
      "solarisAppsCut",
    ],
    [
      "orderDate",
      "orderTime",
      "order",
      "totalPrice",
      "solarisAppsCut",
      "name",
      "email",
      "phoneNumber",
    ],
    [
      "name",
      "email",
      "phoneNumber",
      "orderDate",
      "orderTime",
      "order",
      "totalPrice",
      "solarisAppsCut",
    ],
    [
      "name",
      "email",
      "totalPrice",
      "solarisAppsCut",
      "phoneNumber",
      "orderDate",
      "orderTime",
      "order",
    ],
    [
      "totalPrice",
      "solarisAppsCut",
      "name",
      "email",
      "phoneNumber",
      "orderDate",
      "orderTime",
      "order",
    ],
    [
      "totalPrice",
      "solarisAppsCut",
      "orderDate",
      "orderTime",
      "order",
      "name",
      "email",
      "phoneNumber",
    ],
  ];

  useEffect(() => {
    if (errorMessage) {
      swal.fire({
        title: `${errorMessage}`,
        background: "black",
        backdrop: `
    rgba(0,0,123,0.8)`,
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: `${okMessage}`,
        customClass: "confirm",
        allowOutsideClick: true,
      });
    }
  }, [errorMessage, swal]);

  useEffect(() => {
    async function addTableOrderChoiceToFirestore() {
      const userRef = await firestore.doc(
        `users/${process.env.REACT_APP_APP_OWNER_ID}`
      );
      try {
        userRef.get().then((doc) => {
          if (doc.exists) {
            if (chosenTableOrder) {
              const newTableOrder = Object.values(chosenTableOrder);
              userRef.update({
                chosenTableOrder: [...newTableOrder],
              });
            }
          }
        });
      } catch (error) {
        setErrorMessage(error);
      }
    }
    addTableOrderChoiceToFirestore();
  }, [chosenTableOrder]);

  return (
    <>
      {rows.length > 0 && (
        <>
          {!showTableOrderChoice && (
            <BounceInDownDiv
              style={{ backgroundColor: "transparent", border: "none" }}
              className="table-order-choice"
            >
              <ShowTableOrderChoiceButton
                onClick={() => setShowTableOrderChoice(true)}
              >
                show table ordering choices
              </ShowTableOrderChoiceButton>
              <p className="small-screen-instructions">
                swipe left and right on the table to view the table rows that
                are out of sight.
              </p>
            </BounceInDownDiv>
          )}

          {showTableOrderChoice && (
            <BounceInDownDiv className="table-order-choice">
              <h1>Choose Table Order</h1>
              <p>
                pick the order in which you would like to display the table data
                <br />( from left to right ).
              </p>

              <div>
                <TableOrderSelectButton
                  onClick={() => setChosenTableOrder(tableOrder[0])}
                >
                  order details, customer details, price details
                </TableOrderSelectButton>
                <TableOrderSelectButton
                  onClick={() => setChosenTableOrder(tableOrder[1])}
                >
                  order details, price details, customer details
                </TableOrderSelectButton>
              </div>
              <div>
                <TableOrderSelectButton
                  onClick={() => setChosenTableOrder(tableOrder[2])}
                >
                  customer details, order details, price details{" "}
                </TableOrderSelectButton>
                <TableOrderSelectButton
                  onClick={() => setChosenTableOrder(tableOrder[3])}
                >
                  customer details, price details, order details
                </TableOrderSelectButton>
              </div>

              <div>
                <TableOrderSelectButton
                  onClick={() => setChosenTableOrder(tableOrder[4])}
                >
                  price details, customer details, order details
                </TableOrderSelectButton>
                <TableOrderSelectButton
                  onClick={() => setChosenTableOrder(tableOrder[5])}
                >
                  price details, order details, customer details
                </TableOrderSelectButton>
              </div>
              <div>
                <HideTableOrderChoiceButton
                  onClick={() => setShowTableOrderChoice(false)}
                >
                  close choices
                </HideTableOrderChoiceButton>
              </div>
            </BounceInDownDiv>
          )}
        </>
      )}
    </>
  );
};

export default ChooseTableOrderChoice;
