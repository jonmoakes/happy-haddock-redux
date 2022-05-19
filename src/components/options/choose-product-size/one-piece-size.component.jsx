import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { onePiece } from "../../../strings/strings";

const OnePieceSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { onePiecePrice } = product;

  return (
    <>
      {onePiecePrice && (
        <RadioDiv>
          <hr />
          <label>1 piece</label>
          <input type="radio" value={onePiece} name="size" />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default OnePieceSize;
