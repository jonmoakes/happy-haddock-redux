import { Text, Span } from "./add-to-order-button.styles";

const AddToOrderButtonError = () => {
  return (
    <Text>
      please note:
      <br />
      the <span style={{ color: " #00ff2a" }}>add to order button</span> will
      show when all <Span>Required</Span> fields have been successfully chosen /
      selected.
    </Text>
  );
};

export default AddToOrderButtonError;
