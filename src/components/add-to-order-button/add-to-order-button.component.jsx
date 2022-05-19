import useSizeSaucesAndQuantityCheck from "./checks/use-size-sauce-quantity-check";
import useSaucesAndQuantityCheck from "./checks/use-sauce-quantity-check";
import useNoOptionsCheck from "./checks/use-no-options-check";

import AddToOrderButtonError from "./add-to-order-button-error";

import { AddToOrderButtonContainer } from "./add-to-order-button.styles";

const AddToOrderButton = ({ children, ...props }) => {
  const { sizeSaucesAndQuantityCheck } = useSizeSaucesAndQuantityCheck();
  const { sauceQuantityCheck } = useSaucesAndQuantityCheck();
  const { noOptionsCheck } = useNoOptionsCheck();

  return (
    <>
      {sizeSaucesAndQuantityCheck() ||
      sauceQuantityCheck() ||
      noOptionsCheck() ? (
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
