import { useState } from "react";
import { useDispatch } from "react-redux";

import { setChosenTableOrder } from "../../store/table/table.action";

import {
  ShowTableOrderChoiceButton,
  HideTableOrderChoiceButton,
  TableOrderSelectButton,
} from "./orders-table.styles";
import { BounceInDownDiv } from "../../styles/bounce-in-down-div/bounce-in-down-div.styles";

import { OrdersTableOrderOptions } from "./orders-table-order-options";
import "../../styles/confirm.css";

const OrdersTableOrderChoices = ({ rows }) => {
  const [showTableOrderChoice, setShowTableOrderChoice] = useState(false);
  const dispatch = useDispatch();

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
                  onClick={() =>
                    dispatch(setChosenTableOrder(OrdersTableOrderOptions[0]))
                  }
                >
                  order details, customer details, price details
                </TableOrderSelectButton>
                <TableOrderSelectButton
                  onClick={() =>
                    dispatch(setChosenTableOrder(OrdersTableOrderOptions[1]))
                  }
                >
                  order details, price details, customer details
                </TableOrderSelectButton>
              </div>
              <div>
                <TableOrderSelectButton
                  onClick={() =>
                    dispatch(setChosenTableOrder(OrdersTableOrderOptions[2]))
                  }
                >
                  customer details, order details, price details{" "}
                </TableOrderSelectButton>
                <TableOrderSelectButton
                  onClick={() =>
                    dispatch(setChosenTableOrder(OrdersTableOrderOptions[3]))
                  }
                >
                  customer details, price details, order details
                </TableOrderSelectButton>
              </div>

              <div>
                <TableOrderSelectButton
                  onClick={() =>
                    dispatch(setChosenTableOrder(OrdersTableOrderOptions[4]))
                  }
                >
                  price details, customer details, order details
                </TableOrderSelectButton>
                <TableOrderSelectButton
                  onClick={() =>
                    dispatch(setChosenTableOrder(OrdersTableOrderOptions[5]))
                  }
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

export default OrdersTableOrderChoices;
