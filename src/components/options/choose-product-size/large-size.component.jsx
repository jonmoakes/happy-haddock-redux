import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { large } from "../../../strings/strings";

const LargeSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { sizePrices } = product;

  return (
    <>
      {sizePrices[0].largePrice !== 0 && (
        <RadioDiv>
          <label>large</label>
          <input type="radio" value={large} name="size" />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default LargeSize;
