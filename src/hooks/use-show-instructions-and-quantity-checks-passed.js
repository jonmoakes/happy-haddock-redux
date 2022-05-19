import { useSelector } from "react-redux";

import {
  selectSaucesSelected,
  selectChosenSize,
  selectSaltAndVinegar,
  selectCan,
} from "../store/final-item/final-item.selector";
import { selectIndividualProduct } from "../store/products/product.selector";

import {
  sizeAndSaucesRequiredCheck,
  onlySaucesRequiredCheck,
  noOptionsAvailableCheck,
  sizeAndSaltAndVinegarRequiredCheck,
  onlySizeRequiredCheck,
  onlySaltAndVinegarRequiredCheck,
  saltAndVinegarAndCansRequiredCheck,
} from "../reusable-functions/show-instructions-and-quantity-checks";

const useShowInstructionsAndQuantityChecksPassed = () => {
  const product = useSelector(selectIndividualProduct);
  const chosenSize = useSelector(selectChosenSize);
  const saucesSelected = useSelector(selectSaucesSelected);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const chosenCan = useSelector(selectCan);

  const showInstructionsAndQuantityChecksPassed = () => {
    return sizeAndSaucesRequiredCheck(product, chosenSize, saucesSelected) ||
      onlySaucesRequiredCheck(product, saucesSelected) ||
      noOptionsAvailableCheck(product) ||
      sizeAndSaltAndVinegarRequiredCheck(product, chosenSize, saltAndVinegar) ||
      onlySizeRequiredCheck(product, chosenSize) ||
      onlySaltAndVinegarRequiredCheck(product, saltAndVinegar) ||
      saltAndVinegarAndCansRequiredCheck(product, saltAndVinegar, chosenCan)
      ? true
      : false;
  };

  return { showInstructionsAndQuantityChecksPassed };
};

export default useShowInstructionsAndQuantityChecksPassed;
