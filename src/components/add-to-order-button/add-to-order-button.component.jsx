import useburgersCategoryAndQuantityCheck from "./checks/use-burgers-category-and-quantity-check";
import useNoOptionsAndQuantityCheck from "./checks/use-no-options-and-quantity-check";
import useSizeSaltAndVinegarAndQuantityCheck from "./checks/use-size-salt-and-vinegar-and-quantity-check";
import useSizeAndQuantityCheck from "./checks/use-size-and-quantity-check";
import useSaltAndVinegarAndQuantityCheck from "./checks/use-salt-and-vinegar-and-quantity-check";
import useSaltAndVinegarDrinkAndQuantityCheck from "./checks/use-salt-and-vinegar-drink-and-quantity-check";
import useSaltAndVinegarConeOfChipsSauceAndQuantityCheck from "./checks/use-salt-and-vinegar-cone-of-chips-sauce-and-quantity-check";
import useSizeSaltAndVinegarCondimentAndQuantityCheck from "./checks/use-size-salt-and-vinegar-condiment-and-quantity-check";
import useCansOrBottlesAndQuantityCheck from "./checks/use-cans-or-bottles-and-quantity-check";
import useTubOfSauceSizeAndQuantityCheck from "./checks/use-tub-of-sauce-size-and-quantity-check";
import useDonerKebabTypeSaucesAndQuantityCheck from "./checks/use-doner-kebab-type-sauces-and-quantity-check";
import useChickenKebabTypeMeatSaucesAndQuantityCheck from "./checks/use-chicken-kebab-type-meat-sauces-and-quantity-check";
import useMixedKebabTypeTwoMeatSaucesAndQuantityCheck from "./checks/use-mixed-kebab-type-two-meat-sauces-and-quantity-check";
import useMixedKebabTypeThreeMeatSaucesAndQuantityCheck from "./checks/use-mixed-kebab-type-three-meat-sauces-and-quantity-check";
import useSauceAndQuantityCheck from "./checks/use-sauce-and-quantity-check";
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
  const { saltAndVinegarConeOfChipsSauceAndQuantityCheck } =
    useSaltAndVinegarConeOfChipsSauceAndQuantityCheck();
  const { sizeSaltAndVinegarCondimentAndQuantityCheck } =
    useSizeSaltAndVinegarCondimentAndQuantityCheck();
  const { cansOrBottlesAndQuantityCheck } = useCansOrBottlesAndQuantityCheck();
  const { tubOfSauceSizeAndQuantityCheck } =
    useTubOfSauceSizeAndQuantityCheck();
  const { donerKebabTypeSaucesAndQuantityCheck } =
    useDonerKebabTypeSaucesAndQuantityCheck();
  const { chickenKebabTypeMeatSaucesAndQuantityCheck } =
    useChickenKebabTypeMeatSaucesAndQuantityCheck();
  const { mixedKebabTypeTwoMeatSaucesAndQuantityCheck } =
    useMixedKebabTypeTwoMeatSaucesAndQuantityCheck();
  const { mixedKebabTypeThreeMeatSaucesAndQuantityCheck } =
    useMixedKebabTypeThreeMeatSaucesAndQuantityCheck();
  const { sauceAndQuantityCheck } = useSauceAndQuantityCheck();

  return (
    <>
      {burgersCategoryAndQuantityCheck() ||
      noOptionsAndQuantityCheck() ||
      sizeSaltAndVinegarAndQuantityCheck() ||
      sizeAndQuantityCheck() ||
      saltAndVinegarAndQuantityCheck() ||
      saltAndVinegarDrinkAndQuantityCheck() ||
      saltAndVinegarConeOfChipsSauceAndQuantityCheck() ||
      sizeSaltAndVinegarCondimentAndQuantityCheck() ||
      cansOrBottlesAndQuantityCheck() ||
      tubOfSauceSizeAndQuantityCheck() ||
      donerKebabTypeSaucesAndQuantityCheck() ||
      chickenKebabTypeMeatSaucesAndQuantityCheck() ||
      mixedKebabTypeTwoMeatSaucesAndQuantityCheck() ||
      mixedKebabTypeThreeMeatSaucesAndQuantityCheck() ||
      sauceAndQuantityCheck() ? (
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
