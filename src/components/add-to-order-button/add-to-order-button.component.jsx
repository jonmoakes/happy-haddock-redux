import useburgersCategoryAndQuantityCheck from "./checks/use-burgers-category-and-quantity-check";
import useNoOptionsAndQuantityCheck from "./checks/use-no-options-and-quantity-check";
import useSizeSaltAndVinegarAndQuantityCheck from "./checks/use-size-salt-and-vinegar-and-quantity-check";
import useSizeAndQuantityCheck from "./checks/use-size-and-quantity-check.component";
import useSaltAndVinegarAndQuantityCheck from "./checks/use-salt-and-vinegar-and-quantity-check";
import useSaltAndVinegarDrinkAndQuantityCheck from "./checks/use-salt-and-vinegar-drink-and-quantity-check";

import AddToOrderButtonError from "./add-to-order-button-error";

import { AddToOrderButtonContainer } from "./add-to-order-button.styles";

const AddToOrderButton = ({ children, ...props }) => {
  const { burgersCategoryAndQuantityCheck } =
    useburgersCategoryAndQuantityCheck();
  const { noOptionsAndQuantityCheck } = useNoOptionsAndQuantityCheck();
  const { sizeSaltAndVinegarAndQuantityCheck } =
    useSizeSaltAndVinegarAndQuantityCheck();
  const { sizeAndQuantityCheck } = useSizeAndQuantityCheck();
  const { saltAndVinegarAndQuantityCheck } =
    useSaltAndVinegarAndQuantityCheck();
  const { saltAndVinegarDrinkAndQuantityCheck } =
    useSaltAndVinegarDrinkAndQuantityCheck();

  return (
    <>
      {burgersCategoryAndQuantityCheck() ||
      noOptionsAndQuantityCheck() ||
      sizeSaltAndVinegarAndQuantityCheck() ||
      sizeAndQuantityCheck() ||
      saltAndVinegarAndQuantityCheck() ||
      saltAndVinegarDrinkAndQuantityCheck() ? (
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
