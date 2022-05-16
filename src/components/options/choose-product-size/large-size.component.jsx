import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { large } from "../../../strings/strings";

const LargeSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { largePrice } = product;

  return (
    <>
      {largePrice !== 0 && (
        <RadioDiv>
          <label>
            large
            <input type="radio" value={large} name="size" />
          </label>
        </RadioDiv>
      )}
    </>
  );
};

export default LargeSize;
