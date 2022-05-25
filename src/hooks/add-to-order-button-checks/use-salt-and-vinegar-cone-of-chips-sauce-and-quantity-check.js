import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import {
  selectSaltAndVinegar,
  selectConeOfChipsSauce,
  selectQuantity,
} from "../../store/final-item/final-item.selector";

const useSaltAndVinegarConeOfChipsSauceAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const coneOfChipsSauce = useSelector(selectConeOfChipsSauce);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const saltAndVinegarConeOfChipsSauceAndQuantityCheck = () => {
    return !options.anyPieAvailable &&
      !options.bottlesAvailable &&
      !options.chickenKebabTypeAvailable &&
      !options.donerKebabTypeAvailable &&
      !options.drinkAvailable &&
      !options.mixedKebabTypeAvailable &&
      !options.noOptionsAvailable &&
      !options.gratedCheeseAvailable &&
      !options.donerMeatAvailable &&
      !options.cheeseSliceAvailable &&
      !options.saladAvailable &&
      !options.saucesAvailable &&
      !options.sizeOptionAvailable &&
      options.condimentsAvailable === 0 &&
      options.meatsAvailable === 0 &&
      options.saltAndVinegarAvailable &&
      saltAndVinegar !== "" &&
      options.coneOfChipsSauceAvailable &&
      coneOfChipsSauce !== "" &&
      quantity > 0
      ? true
      : false;
  };

  return { saltAndVinegarConeOfChipsSauceAndQuantityCheck };
};

export default useSaltAndVinegarConeOfChipsSauceAndQuantityCheck;
