import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { fourPieces } from "../../../strings/strings";

const FourPieceSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { sizePrices } = product;

  return (
    <>
      {sizePrices[0].fourPiecePrice !== 0 && (
        <RadioDiv>
          <label>4 pieces</label>
          <input type="radio" value={fourPieces} name="size" />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default FourPieceSize;
