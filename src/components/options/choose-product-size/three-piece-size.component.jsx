import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { threePieces } from "../../../strings/strings";

const ThreePieceSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { threePiecePrice } = product;

  return (
    <>
      {threePiecePrice !== 0 && (
        <RadioDiv>
          <label>
            3 pieces
            <input type="radio" value={threePieces} name="size" />
          </label>
        </RadioDiv>
      )}
    </>
  );
};

export default ThreePieceSize;
