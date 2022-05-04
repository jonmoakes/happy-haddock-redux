import { AddToOrderButtonContainer } from "./add-to-order-button.styles";

const AddToOrderButton = ({ children, ...props }) => (
  <AddToOrderButtonContainer {...props}>{children}</AddToOrderButtonContainer>
);

export default AddToOrderButton;
