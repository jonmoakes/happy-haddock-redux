import { useSelector } from "react-redux";

import {
  selectSaucesSelected,
  selectChosenSize,
  selectSaltAndVinegar,
} from "../store/final-item/final-item.selector";
import { selectIndividualProduct } from "../store/products/product.selector";

import {
  sizeAndSaucesRequiredCheck,
  onlySaucesRequiredCheck,
  noOptionsAvailableCheck,
  sizeAndSaltAndVinegarRequiredCheck,
  onlySizeRequiredCheck,
  onlySaltAndVinegarRequiredCheck,
} from "../reusable-functions/show-instructions-and-quantity-checks";

const useShowInstructionsAndQuantityChecksPassed = () => {
  const product = useSelector(selectIndividualProduct);
  const chosenSize = useSelector(selectChosenSize);
  const saucesSelected = useSelector(selectSaucesSelected);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);

  const showInstructionsAndQuantityChecksPassed = () => {
    return sizeAndSaucesRequiredCheck(product, chosenSize, saucesSelected) ||
      onlySaucesRequiredCheck(product, saucesSelected) ||
      noOptionsAvailableCheck(product) ||
      sizeAndSaltAndVinegarRequiredCheck(product, chosenSize, saltAndVinegar) ||
      onlySizeRequiredCheck(product, chosenSize) ||
      onlySaltAndVinegarRequiredCheck(product, saltAndVinegar)
      ? true
      : false;
  };

  return { showInstructionsAndQuantityChecksPassed };
};

export default useShowInstructionsAndQuantityChecksPassed;
