import useBurgersCategoryAndQuantityCheck from "./use-burgers-category-and-quantity-check";
import useNoOptionsAndQuantityCheck from "./use-no-options-and-quantity-check";
import useSizeSaltAndVinegarAndQuantityCheck from "./use-size-salt-and-vinegar-and-quantity-check";
import useSizeAndQuantityCheck from "./use-size-and-quantity-check";
import useSaltAndVinegarAndQuantityCheck from "./use-salt-and-vinegar-and-quantity-check";
import useSaltAndVinegarDrinkAndQuantityCheck from "./use-salt-and-vinegar-drink-and-quantity-check";
import useSaltAndVinegarConeOfChipsSauceAndQuantityCheck from "./use-salt-and-vinegar-cone-of-chips-sauce-and-quantity-check";
import useSizeSaltAndVinegarCondimentAndQuantityCheck from "./use-size-salt-and-vinegar-condiment-and-quantity-check";
import useCansOrBottlesAndQuantityCheck from "./use-cans-or-bottles-and-quantity-check";
import useTubOfSauceSizeAndQuantityCheck from "./use-tub-of-sauce-size-and-quantity-check";
import useDonerKebabTypeSaucesAndQuantityCheck from "./use-doner-kebab-type-sauces-and-quantity-check";
import useChickenKebabTypeMeatSaucesAndQuantityCheck from "./use-chicken-kebab-type-meat-sauces-and-quantity-check";
import useMixedKebabTypeTwoMeatSaucesAndQuantityCheck from "./use-mixed-kebab-type-two-meat-sauces-and-quantity-check";
import useMixedKebabTypeThreeMeatSaucesAndQuantityCheck from "./use-mixed-kebab-type-three-meat-sauces-and-quantity-check";
import useSauceAndQuantityCheck from "./use-sauce-and-quantity-check";
import useAnyPieSaltAndVinegarCondimentAndQuantityCheck from "./use-any-pie-salt-and-vinegar-one-condiment-and-quantity-check";
import useOneSauceSaltAndVinegarOneCondimentAndQuantityCheck from "./use-one-sauce-salt-and-vinegar-one-condiment-and-quantity-check";
import useSaucesSaltAndVinegarAndQuantityCheck from "./use-sauces-salt-and-vinegar-and-quantity-check";

const useCombinedCheck = () => {
  const { burgersCategoryAndQuantityCheck } =
    useBurgersCategoryAndQuantityCheck();
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

  const combinedCheck = () => {
    return burgersCategoryAndQuantityCheck() ||
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
      saucesSaltAndVinegarAndQuantityCheck()
      ? true
      : false;
  };

  return { combinedCheck };
};

export default useCombinedCheck;
