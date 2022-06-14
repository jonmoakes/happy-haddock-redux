import { Text, Span } from "./add-to-order-button.styles";

const AddToOrderButtonError = () => (
  <Text>
    please note:
    <br />
    the <span className="order-button-color">add to order button</span> will
    show when all <Span>Required</Span> fields have been successfully chosen /
    selected.
  </Text>
);

export default AddToOrderButtonError;
