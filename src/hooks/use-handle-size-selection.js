import { useDispatch, useSelector } from "react-redux";

import {
  addSizeSelectedPrice,
  hasSizebeenChosen,
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
        dispatch(hasSizebeenChosen(true));
        break;
      case double:
        dispatch(addSizeSelectedPrice(doublePrice));
        dispatch(hasSizebeenChosen(true));
        break;
      case small:
        dispatch(addSizeSelectedPrice(smallPrice));
        dispatch(hasSizebeenChosen(true));
        break;
      case medium:
        dispatch(addSizeSelectedPrice(mediumPrice));
        dispatch(hasSizebeenChosen(true));
        break;
      case large:
        dispatch(addSizeSelectedPrice(largePrice));
        dispatch(hasSizebeenChosen(true));
        break;
      case sixNuggets:
        dispatch(addSizeSelectedPrice(sixNuggetsPrice));
        dispatch(hasSizebeenChosen(true));
        break;
      case nineNuggets:
        dispatch(addSizeSelectedPrice(nineNuggetsPrice));
        dispatch(hasSizebeenChosen(true));
        break;
      case twelveNuggets:
        dispatch(addSizeSelectedPrice(twelveNuggetsPrice));
        dispatch(hasSizebeenChosen(true));
        break;
      case twentyNuggets:
        dispatch(addSizeSelectedPrice(twentyNuggetsPrice));
        dispatch(hasSizebeenChosen(true));
        break;
      case onePiece:
        dispatch(addSizeSelectedPrice(onePiecePrice));
        dispatch(hasSizebeenChosen(true));
        break;
      case twoPieces:
        dispatch(addSizeSelectedPrice(twoPiecePrice));
        dispatch(hasSizebeenChosen(true));
        break;
      case threePieces:
        dispatch(addSizeSelectedPrice(threePiecePrice));
        dispatch(hasSizebeenChosen(true));
        break;
      case fourPieces:
        dispatch(addSizeSelectedPrice(fourPiecePrice));
        dispatch(hasSizebeenChosen(true));
        break;
      default:
        return value;
    }
  };

  return { handleSizeChange };
};

export default useHandleSizeSelection;
