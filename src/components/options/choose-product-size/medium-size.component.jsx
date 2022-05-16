import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { medium } from "../../../strings/strings";

const MediumSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { mediumPrice } = product;

  return (
    <>
      {mediumPrice !== 0 && (
        <RadioDiv>
          <label>
            medium
            <input type="radio" value={medium} name="size" />
          </label>
        </RadioDiv>
      )}
    </>
  );
};

export default MediumSize;
