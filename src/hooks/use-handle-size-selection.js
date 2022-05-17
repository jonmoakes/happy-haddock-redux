import { useDispatch, useSelector } from "react-redux";

import {
  addSizeSelectedPrice,
  addChosenSize,
} from "../store/final-item/final-item.action";
import { selectIndividualProduct } from "../store/products/product.selector";

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
} from "../strings/strings";

const useHandleSizeSelection = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();

  const {
    doublePrice,
    smallPrice,
    mediumPrice,
    largePrice,
    sixNuggetsPrice,
    nineNuggetsPrice,
    twelveNuggetsPrice,
    twentyNuggetsPrice,
    onePiecePrice,
    twoPiecePrice,
    threePiecePrice,
    fourPiecePrice,
  } = product;

  const handleSizeChange = (event) => {
    const value = event.target.value;

    switch (value) {
      case single:
        dispatch(addSizeSelectedPrice(0));
        dispatch(addChosenSize(value));
        break;
      case double:
        dispatch(addSizeSelectedPrice(doublePrice));
        dispatch(addChosenSize(value));
        break;
      case small:
        dispatch(addSizeSelectedPrice(smallPrice));
        dispatch(addChosenSize(value));
        break;
      case medium:
        dispatch(addSizeSelectedPrice(mediumPrice));
        dispatch(addChosenSize(value));
        break;
      case large:
        dispatch(addSizeSelectedPrice(largePrice));
        dispatch(addChosenSize(value));
        break;
      case sixNuggets:
        dispatch(addSizeSelectedPrice(sixNuggetsPrice));
        dispatch(addChosenSize(value));
        break;
      case nineNuggets:
        dispatch(addSizeSelectedPrice(nineNuggetsPrice));
        dispatch(addChosenSize(value));
        break;
      case twelveNuggets:
        dispatch(addSizeSelectedPrice(twelveNuggetsPrice));
        dispatch(addChosenSize(value));
        break;
      case twentyNuggets:
        dispatch(addSizeSelectedPrice(twentyNuggetsPrice));
        dispatch(addChosenSize(value));
        break;
      case onePiece:
        dispatch(addSizeSelectedPrice(onePiecePrice));
        dispatch(addChosenSize(value));
        break;
      case twoPieces:
        dispatch(addSizeSelectedPrice(twoPiecePrice));
        dispatch(addChosenSize(value));
        break;
      case threePieces:
        dispatch(addSizeSelectedPrice(threePiecePrice));
        dispatch(addChosenSize(value));
        break;
      case fourPieces:
        dispatch(addSizeSelectedPrice(fourPiecePrice));
        dispatch(addChosenSize(value));
        break;
      default:
        return value;
    }
  };

  return { handleSizeChange };
};

export default useHandleSizeSelection;
