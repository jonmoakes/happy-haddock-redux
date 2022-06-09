import { useDispatch, useSelector } from "react-redux";

import {
  addSizeSelectedPrice,
  addChosenSize,
} from "../../store/final-item/final-item.action";
import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  single,
  double,
  small,
  medium,
  large,
  sixNuggets,
  nineNuggets,
  twelveNuggets,
  twentyNuggets,
  onePiece,
  twoPieces,
  threePieces,
  fourPieces,
} from "../../strings/strings";

const useHandleSizeSelection = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();

  const { sizePrices } = product;

  const handleSizeChange = (event) => {
    const value = event.target.value;

    switch (value) {
      case single:
        dispatch(addSizeSelectedPrice(0));
        dispatch(addChosenSize(value));
        break;
      case double:
        dispatch(addSizeSelectedPrice(sizePrices[0].doublePrice));
        dispatch(addChosenSize(value));
        break;
      case small:
        dispatch(addSizeSelectedPrice(0));
        dispatch(addChosenSize(value));
        break;
      case medium:
        dispatch(addSizeSelectedPrice(sizePrices[0].mediumPrice));
        dispatch(addChosenSize(value));
        break;
      case large:
        dispatch(addSizeSelectedPrice(sizePrices[0].largePrice));
        dispatch(addChosenSize(value));
        break;
      case sixNuggets:
        dispatch(addSizeSelectedPrice(0));
        dispatch(addChosenSize(value));
        break;
      case nineNuggets:
        dispatch(addSizeSelectedPrice(sizePrices[0].nineNuggetsPrice));
        dispatch(addChosenSize(value));
        break;
      case twelveNuggets:
        dispatch(addSizeSelectedPrice(sizePrices[0].twelveNuggetsPrice));
        dispatch(addChosenSize(value));
        break;
      case twentyNuggets:
        dispatch(addSizeSelectedPrice(sizePrices[0].twentyNuggetsPrice));
        dispatch(addChosenSize(value));
        break;
      case onePiece:
        dispatch(addSizeSelectedPrice(0));
        dispatch(addChosenSize(value));
        break;
      case twoPieces:
        dispatch(addSizeSelectedPrice(sizePrices[0].twoPiecePrice));
        dispatch(addChosenSize(value));
        break;
      case threePieces:
        dispatch(addSizeSelectedPrice(sizePrices[0].threePiecePrice));
        dispatch(addChosenSize(value));
        break;
      case fourPieces:
        dispatch(addSizeSelectedPrice(sizePrices[0].fourPiecePrice));
        dispatch(addChosenSize(value));
        break;
      default:
        return value;
    }
  };

  return { handleSizeChange };
};

export default useHandleSizeSelection;
