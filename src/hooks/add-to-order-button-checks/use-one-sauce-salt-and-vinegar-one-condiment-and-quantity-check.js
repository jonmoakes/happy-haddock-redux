import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import {
  selectSaucesSelected,
  selectSaltAndVinegar,
  selectSingleCondiment,
  selectQuantity,
} from "../../store/final-item/final-item.selector";

import { oneSauceChosenCheck } from "../../reusable-functions/multiple-checkboxes-selectable-checks";

const useOneSauceSaltAndVinegarOneCondimentAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const saucesSelected = useSelector(selectSaucesSelected);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const oneCondiment = useSelector(selectSingleCondiment);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const oneSauceSaltAndVinegarOneCondimentAndQuantityCheck = () => {
    return !options.anyPieAvailable &&
      !options.bottlesAvailable &&
      !options.chickenKebabTypeAvailable &&
      !options.donerKebabTypeAvailable &&
      !options.drinkAvailable &&
      !options.noOptionsAvailable &&
      !options.gratedCheeseAvailable &&
      !options.donerMeatAvailable &&
      !options.cheeseSliceAvailable &&
      !options.coneOfChipsSauceAvailable &&
      !options.mixedKebabTypeAvailable &&
      !options.saladAvailable &&
      !options.sizeOptionAvailable &&
      options.meatsAvailable === 0 &&
      options.saucesAvailable &&
      oneSauceChosenCheck(saucesSelected) &&
      options.saltAndVinegarAvailable &&
      saltAndVinegar !== "" &&
      options.condimentsAvailable === 1 &&
      oneCondiment !== "" &&
      quantity > 0
      ? true
      : false;
  };

  return { oneSauceSaltAndVinegarOneCondimentAndQuantityCheck };
};

export default useOneSauceSaltAndVinegarOneCondimentAndQuantityCheck;
