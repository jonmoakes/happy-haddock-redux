import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { threePieces } from "../../../strings/strings";

const ThreePieceSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { sizePrices } = product;

  return (
    <>
      {sizePrices[0].threePiecePrice !== 0 && (
        <RadioDiv>
          <label>3 pieces</label>
          <input type="radio" value={threePieces} name="size" />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default ThreePieceSize;
