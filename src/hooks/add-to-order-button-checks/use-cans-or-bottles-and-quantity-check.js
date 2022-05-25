import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../store/products/product.selector";
import {
  selectCan,
  selectBottles,
  selectQuantity,
} from "../../store/final-item/final-item.selector";

const useCansOrBottlesAndQuantityCheck = () => {
  const product = useSelector(selectIndividualProduct);
  const can = useSelector(selectCan);
  const bottle = useSelector(selectBottles);
  const quantity = useSelector(selectQuantity);

  const { optionsAvailable } = product;

  const options = optionsAvailable[0];

  const cansOrBottlesAndQuantityCheck = () => {
    return (
      // for choose cans
      (!options.anyPieAvailable &&
        !options.bottlesAvailable &&
        !options.chickenKebabTypeAvailable &&
        !options.coneOfChipsSauceAvailable &&
        !options.donerKebabTypeAvailable &&
        !options.mixedKebabTypeAvailable &&
        !options.noOptionsAvailable &&
        !options.gratedCheeseAvailable &&
        !options.donerMeatAvailable &&
        !options.cheeseSliceAvailable &&
        !options.saladAvailable &&
        !options.saltAndVinegarAvailable &&
        !options.saucesAvailable &&
        !options.sizeOptionAvailable &&
        options.condimentsAvailable === 0 &&
        options.meatsAvailable === 0 &&
        options.drinkAvailable &&
        can !== "" &&
        quantity > 0) ||
        // for choose bottles
        (!options.anyPieAvailable &&
          !options.chickenKebabTypeAvailable &&
          !options.coneOfChipsSauceAvailable &&
          !options.donerKebabTypeAvailable &&
          !options.drinkAvailable &&
          !options.mixedKebabTypeAvailable &&
          !options.noOptionsAvailable &&
          !options.gratedCheeseAvailable &&
          !options.donerMeatAvailable &&
          !options.cheeseSliceAvailable &&
          !options.saladAvailable &&
          !options.saltAndVinegarAvailable &&
          !options.saucesAvailable &&
          !options.sizeOptionAvailable &&
          options.condimentsAvailable === 0 &&
          options.meatsAvailable === 0 &&
          options.bottlesAvailable &&
          bottle !== "" &&
          quantity > 0)
        ? true
        : false
    );
  };

  return { cansOrBottlesAndQuantityCheck };
};

export default useCansOrBottlesAndQuantityCheck;
