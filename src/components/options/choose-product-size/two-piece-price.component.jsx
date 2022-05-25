import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { twoPieces } from "../../../strings/strings";

const TwoPieceSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { sizePrices } = product;

  return (
    <>
      {sizePrices[0].twoPiecePrice !== 0 && (
        <RadioDiv>
          <label>2 pieces</label>
          <input type="radio" value={twoPieces} name="size" />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default TwoPieceSize;
