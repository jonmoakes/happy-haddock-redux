import { useSelector } from "react-redux";

import {
  selectQuantity,
  selectSaucesSelected,
  selectChosenSize,
  selectSaltAndVinegar,
} from "../store/final-item/final-item.selector";
import { selectIndividualProduct } from "../store/products/product.selector";

import {
  sizeSaucesAndQuantityRequiredCheck,
  saucesAndQuantityRequiredCheck,
  noOptionsAvailableCheck,
  sizeSaltAndVinegarAndQuantityRequiredCheck,
} from "../reusable-functions/add-to-order-checks";

const useShowAddToOrderButtonChecksPassed = () => {
  const quantity = useSelector(selectQuantity);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const product = useSelector(selectIndividualProduct);
  const saucesSelected = useSelector(selectSaucesSelected);
  const chosenSize = useSelector(selectChosenSize);

  const { noOptionsAvailable, saltAndVinegarAvailable, hasSizeOption } =
    product;

  const showAddToOrderButtonChecksPassed = () => {
    return sizeSaucesAndQuantityRequiredCheck(
      chosenSize,
      saucesSelected,
      quantity
    ) ||
      saucesAndQuantityRequiredCheck(saucesSelected, quantity) ||
      noOptionsAvailableCheck(noOptionsAvailable, quantity) ||
      sizeSaltAndVinegarAndQuantityRequiredCheck(
        hasSizeOption,
        chosenSize,
        saltAndVinegarAvailable,
        saltAndVinegar,
        quantity
      )
      ? true
      : false;
  };

  return { showAddToOrderButtonChecksPassed };
};

export default useShowAddToOrderButtonChecksPassed;
