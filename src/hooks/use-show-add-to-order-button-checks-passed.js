import { useSelector } from "react-redux";

import {
  selectQuantity,
  selectSaucesSelected,
  selectChosenSize,
} from "../store/final-item/final-item.selector";
import { selectIndividualProduct } from "../store/products/product.selector";

import {
  sizeSaucesAndQuantityRequiredCheck,
  saucesAndQuantityRequiredCheck,
  noOptionsAvailableCheck,
} from "../reusable-functions/add-to-order-checks";

const useShowAddToOrderButtonChecksPassed = () => {
  const quantity = useSelector(selectQuantity);
  const product = useSelector(selectIndividualProduct);
  const saucesSelected = useSelector(selectSaucesSelected);
  const chosenSize = useSelector(selectChosenSize);

  const { noOptionsAvailable } = product;

  const showAddToOrderButtonChecksPassed = () => {
    return sizeSaucesAndQuantityRequiredCheck(
      chosenSize,
      saucesSelected,
      quantity
    ) ||
      saucesAndQuantityRequiredCheck(saucesSelected, quantity) ||
      noOptionsAvailableCheck(noOptionsAvailable, quantity)
      ? true
      : false;
  };

  return { showAddToOrderButtonChecksPassed };
};

export default useShowAddToOrderButtonChecksPassed;
