import OrdersTableSumInfo from "./orders-table-sum-info.component";

import { CutAmountDiv, ContactLink } from "./orders-table.styles";

const OrdersTableSolarisCutInfo = ({ orders, chosenEntry }) => {
  const getSelectedIncomes = orders.map((order) => {
    return Number(order.solarisAppsCut);
  });
  const sum = getSelectedIncomes.reduce((a, b) => a + b, 0);

  return (
    <>
      {chosenEntry.length > 1 && (
        <CutAmountDiv>
          <p>here is the combined total of each solaris apps cut entry.</p>
          <p>
            this allows you to easily add up and check against your invoice.
          </p>
          <p>
            please{" "}
            <ContactLink className="cut-link" to="/contact">
              contact me
            </ContactLink>{" "}
            me with any questions!
          </p>
          <hr />
          <h2>combined total of selected entries:</h2>
          <p className="amount">£{sum.toFixed(2)}</p>
          <hr />
          <OrdersTableSumInfo />
        </CutAmountDiv>
      )}
    </>
  );
};

export default OrdersTableSolarisCutInfo;
