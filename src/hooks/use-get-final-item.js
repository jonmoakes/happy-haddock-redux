import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { selectIndividualProduct } from "../store/products/product.selector";
import {
  selectChosenSize,
  selectSizeSelectedPrice,
  selectSaltAndVinegar,
  selectGratedCheesePrice,
  selectDonerMeatPrice,
  selectCheeseSliceSelected,
  selectSaladSelected,
  selectSaucesSelected,
  selectCan,
  selectSingleCondiment,
  selectSpecialInstructions,
  selectQuantity,
} from "../store/final-item/final-item.selector";

const useGetFinalItem = () => {
  const product = useSelector(selectIndividualProduct);
  const chosenSize = useSelector(selectChosenSize);
  const sizeSelectedPrice = useSelector(selectSizeSelectedPrice);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const gratedCheesePrice = useSelector(selectGratedCheesePrice);
  const donerMeatPrice = useSelector(selectDonerMeatPrice);
  const cheeseSliceSelected = useSelector(selectCheeseSliceSelected);
  const saladSelected = useSelector(selectSaladSelected);
  const saucesSelected = useSelector(selectSaucesSelected);
  const can = useSelector(selectCan);
  const singleCondiment = useSelector(selectSingleCondiment);
  const specialInstructions = useSelector(selectSpecialInstructions);
  const quantity = useSelector(selectQuantity);

  const { name, description, price } = product;

  const finalItem = {
    id: uuidv4(),
    name,
    description,
    price,
    chosenSize,
    sizeSelectedPrice,
    saltAndVinegar,
    gratedCheesePrice,
    donerMeatPrice,
    cheeseSliceSelected,
    saladSelected,
    saucesSelected,
    can,
    singleCondiment,
    specialInstructions,
    quantity,
    selectedOptionsCombinedPrice:
      sizeSelectedPrice + gratedCheesePrice + donerMeatPrice,
  };

  return { finalItem };
};

export default useGetFinalItem;
