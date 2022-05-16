import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { onePiece } from "../../../strings/strings";

const OnePieceSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { onePiecePrice } = product;

  return (
    <>
      {onePiecePrice !== 0 && (
        <RadioDiv>
          <label>
            1 piece
            <input type="radio" value={onePiece} name="size" />
          </label>
        </RadioDiv>
      )}
    </>
  );
};

export default OnePieceSize;
