import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { fourPieces } from "../../../strings/strings";

const FourPieceSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { sizePrices } = product;
  const fourPiecePrice = sizePrices[0].fourPiecePrice;

  return (
    <>
      {fourPiecePrice !== 0 && (
        <RadioDiv>
          <label>4 pieces ( + £{fourPiecePrice.toFixed(2)} )</label>
          <input type="radio" value={fourPieces} name="size" />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default FourPieceSize;
