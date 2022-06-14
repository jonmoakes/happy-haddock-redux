import { useState, useEffect } from "react";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import useGenericErrorSwal from "../../hooks/swals/use-genereic-error-swal";

import {
  ShowTableOrderChoiceButton,
  HideTableOrderChoiceButton,
  TableOrderSelectButton,
} from "./orders-table.styles";
import { BounceInDownDiv } from "../../styles/bounce-in-down-div/bounce-in-down-div.styles";

import { tableOrderOptions } from "./table-order-options";
import "../../styles/confirm.css";

const ChooseTableOrderChoice = ({ rows }) => {
  const [showTableOrderChoice, setShowTableOrderChoice] = useState(false);
  const [newTableOrder, setNewTableOrder] = useState([]);
  const [error, setError] = useState("");

  const { genericErrorSwal } = useGenericErrorSwal();

  useEffect(() => {
    if (error) {
      genericErrorSwal(error);
    }
  }, [error, genericErrorSwal]);

  useEffect(() => {
    async function addTableOrderChoiceToFirestore() {
      const ownerRef = await doc(
        db,
        "users",
        process.env.REACT_APP_APP_OWNER_ID
      );

      const userSnapshot = await getDoc(ownerRef);

      try {
        if (!userSnapshot.exists) return;
        const newOrder = Object.values(newTableOrder);
        await updateDoc(ownerRef, {
          chosenTableOrder: [...newOrder],
        });
      } catch (error) {
        setError(error);
      }
    }
    addTableOrderChoiceToFirestore();
  }, [newTableOrder]);

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
                  onClick={() => setNewTableOrder(tableOrderOptions[0])}
                >
                  order details, customer details, price details
                </TableOrderSelectButton>
                <TableOrderSelectButton
                  onClick={() => setNewTableOrder(tableOrderOptions[1])}
                >
                  order details, price details, customer details
                </TableOrderSelectButton>
              </div>
              <div>
                <TableOrderSelectButton
                  onClick={() => setNewTableOrder(tableOrderOptions[2])}
                >
                  customer details, order details, price details{" "}
                </TableOrderSelectButton>
                <TableOrderSelectButton
                  onClick={() => setNewTableOrder(tableOrderOptions[3])}
                >
                  customer details, price details, order details
                </TableOrderSelectButton>
              </div>

              <div>
                <TableOrderSelectButton
                  onClick={() => setNewTableOrder(tableOrderOptions[4])}
                >
                  price details, customer details, order details
                </TableOrderSelectButton>
                <TableOrderSelectButton
                  onClick={() => setNewTableOrder(tableOrderOptions[5])}
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
