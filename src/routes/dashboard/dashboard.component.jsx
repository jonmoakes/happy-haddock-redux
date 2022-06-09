import OrdersTable from "../../components/orders-table/orders-table.component";
import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";

const Dashboard = () => {
  return (
    <Container>
      <Div>
        <h1>dashboard</h1>
        <OrdersTable />
      </Div>
    </Container>
  );
};

export default Dashboard;
