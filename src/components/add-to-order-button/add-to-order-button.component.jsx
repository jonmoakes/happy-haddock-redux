import useShowAddToOrderButtonChecksPassed from "../../hooks/use-show-add-to-order-button-checks-passed";

import AddToOrderButtonError from "./add-to-order-button-error";

import { AddToOrderButtonContainer } from "./add-to-order-button.styles";

const AddToOrderButton = ({ children, ...props }) => {
  const { showAddToOrderButtonChecksPassed } =
    useShowAddToOrderButtonChecksPassed();

  return (
    <>
      {showAddToOrderButtonChecksPassed() ? (
        <AddToOrderButtonContainer {...props}>
          {children}
        </AddToOrderButtonContainer>
      ) : (
        <AddToOrderButtonError />
      )}
    </>
  );
};

export default AddToOrderButton;
