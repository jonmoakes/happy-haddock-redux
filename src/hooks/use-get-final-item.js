import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { selectIndividualProduct } from "../store/products/product.selector";
import {
  selectChosenSize,
  selectSizeSelectedPrice,
  selectDonerKebabType,
  selectDonerKebabTypePrice,
  selectChickenKebabType,
  selectChickenKebabTypePrice,
  selectMixedKebabType,
  selectMixedKebabTypePrice,
  selectSaltAndVinegar,
  selectPie,
  selectGratedCheesePrice,
  selectDonerMeatPrice,
  selectCheeseSliceSelected,
  selectSaladSelected,
  selectSaucesSelected,
  selectCan,
  selectBottles,
  selectSingleCondiment,
  selectTwoCondiments,
  selectConeOfChipsSauce,
  selectOneMeat,
  selectTwoMeats,
  selectSpecialInstructions,
  selectQuantity,
} from "../store/final-item/final-item.selector";

const useGetFinalItem = () => {
  const product = useSelector(selectIndividualProduct);
  const chosenSize = useSelector(selectChosenSize);
  const sizeSelectedPrice = useSelector(selectSizeSelectedPrice);
  const donerKebabType = useSelector(selectDonerKebabType);
  const donerKebabTypePrice = useSelector(selectDonerKebabTypePrice);
  const chickenKebabType = useSelector(selectChickenKebabType);
  const chickenKebabTypePrice = useSelector(selectChickenKebabTypePrice);
  const mixedKebabType = useSelector(selectMixedKebabType);
  const mixedKebabTypePrice = useSelector(selectMixedKebabTypePrice);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const pie = useSelector(selectPie);
  const gratedCheesePrice = useSelector(selectGratedCheesePrice);
  const donerMeatPrice = useSelector(selectDonerMeatPrice);
  const cheeseSliceSelected = useSelector(selectCheeseSliceSelected);
  const saladSelected = useSelector(selectSaladSelected);
  const saucesSelected = useSelector(selectSaucesSelected);
  const can = useSelector(selectCan);
  const bottles = useSelector(selectBottles);
  const singleCondiment = useSelector(selectSingleCondiment);
  const twoCondiments = useSelector(selectTwoCondiments);
  const coneOfChipsSauce = useSelector(selectConeOfChipsSauce);
  const oneMeat = useSelector(selectOneMeat);
  const twoMeats = useSelector(selectTwoMeats);
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
    donerKebabType,
    donerKebabTypePrice,
    chickenKebabType,
    chickenKebabTypePrice,
    mixedKebabType,
    mixedKebabTypePrice,
    saltAndVinegar,
    pie,
    gratedCheesePrice,
    donerMeatPrice,
    cheeseSliceSelected,
    saladSelected,
    saucesSelected,
    can,
    bottles,
    singleCondiment,
    twoCondiments,
    coneOfChipsSauce,
    oneMeat,
    twoMeats,
    specialInstructions,
    quantity,
    selectedOptionsCombinedPrice:
      sizeSelectedPrice +
      donerKebabTypePrice +
      chickenKebabTypePrice +
      mixedKebabTypePrice +
      gratedCheesePrice +
      donerMeatPrice,
  };

  return { finalItem };
};

export default useGetFinalItem;
