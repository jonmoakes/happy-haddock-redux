import useburgersCategoryAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-burgers-category-and-quantity-check";
import useNoOptionsAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-no-options-and-quantity-check";
import useSizeSaltAndVinegarAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-size-salt-and-vinegar-and-quantity-check";
import useSizeAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-size-and-quantity-check";
import useSaltAndVinegarAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-salt-and-vinegar-and-quantity-check";
import useSaltAndVinegarDrinkAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-salt-and-vinegar-drink-and-quantity-check";
import useSaltAndVinegarConeOfChipsSauceAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-salt-and-vinegar-cone-of-chips-sauce-and-quantity-check";
import useSizeSaltAndVinegarCondimentAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-size-salt-and-vinegar-condiment-and-quantity-check";
import useCansOrBottlesAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-cans-or-bottles-and-quantity-check";
import useTubOfSauceSizeAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-tub-of-sauce-size-and-quantity-check";
import useDonerKebabTypeSaucesAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-doner-kebab-type-sauces-and-quantity-check";
import useChickenKebabTypeMeatSaucesAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-chicken-kebab-type-meat-sauces-and-quantity-check";
import useMixedKebabTypeTwoMeatSaucesAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-mixed-kebab-type-two-meat-sauces-and-quantity-check";
import useMixedKebabTypeThreeMeatSaucesAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-mixed-kebab-type-three-meat-sauces-and-quantity-check";
import useSauceAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-sauce-and-quantity-check";
import useAnyPieSaltAndVinegarCondimentAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-any-pie-salt-and-vinegar-one-condiment-and-quantity-check";
import useOneSauceSaltAndVinegarOneCondimentAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-one-sauce-salt-and-vinegar-one-condiment-and-quantity-check";
import useSaucesSaltAndVinegarAndQuantityCheck from "../../hooks/add-to-order-button-checks/use-sauces-salt-and-vinegar-and-quantity-check";

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
  const { anyPieSaltAndVinegarCondimentAndQuantityCheck } =
    useAnyPieSaltAndVinegarCondimentAndQuantityCheck();
  const { oneSauceSaltAndVinegarOneCondimentAndQuantityCheck } =
    useOneSauceSaltAndVinegarOneCondimentAndQuantityCheck();
  const { saucesSaltAndVinegarAndQuantityCheck } =
    useSaucesSaltAndVinegarAndQuantityCheck();

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
      sauceAndQuantityCheck() ||
      anyPieSaltAndVinegarCondimentAndQuantityCheck() ||
      oneSauceSaltAndVinegarOneCondimentAndQuantityCheck() ||
      saucesSaltAndVinegarAndQuantityCheck() ? (
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
