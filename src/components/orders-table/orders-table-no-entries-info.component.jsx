import { Div } from "../../styles/div/div.styles";

const OrdersTableNoEntriesInfo = ({ data }) => (
  <>
    {data.length === 0 && (
      <Div className="no-entries">
        <p>no entries yet. you will see data when you receive an order.</p>
      </Div>
    )}
  </>
);

export default OrdersTableNoEntriesInfo;
