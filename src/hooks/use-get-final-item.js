import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { selectIndividualProduct } from "../store/products/product.selector";
import {
  selectChosenSize,
  selectSizeSelectedPrice,
  selectChosenType,
  selectTypeSelectedPrice,
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
  const chosenType = useSelector(selectChosenType);
  const typeSelectedPrice = useSelector(selectTypeSelectedPrice);
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
    chosenType,
    typeSelectedPrice,
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
      typeSelectedPrice +
      gratedCheesePrice +
      donerMeatPrice,
  };

  return { finalItem };
};

export default useGetFinalItem;
