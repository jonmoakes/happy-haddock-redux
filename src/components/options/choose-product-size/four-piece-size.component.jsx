import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { fourPieces } from "../../../strings/strings";

const FourPieceSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { fourPiecePrice } = product;

  return (
    <>
      {fourPiecePrice !== 0 && (
        <RadioDiv>
          <label>
            4 pieces
            <input type="radio" value={fourPieces} name="size" />
          </label>
        </RadioDiv>
      )}
    </>
  );
};

export default FourPieceSize;
