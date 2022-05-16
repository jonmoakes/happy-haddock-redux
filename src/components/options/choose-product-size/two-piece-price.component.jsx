import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { twoPieces } from "../../../strings/strings";

const TwoPieceSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { twoPiecePrice } = product;

  return (
    <>
      {twoPiecePrice !== 0 && (
        <RadioDiv>
          <label>
            2 pieces
            <input type="radio" value={twoPieces} name="size" />
          </label>
        </RadioDiv>
      )}
    </>
  );
};

export default TwoPieceSize;
