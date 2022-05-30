import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { double } from "../../../strings/strings";

const DoubleSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { sizePrices } = product;
  const doublePrice = sizePrices[0].doublePrice;

  return (
    <>
      {sizePrices[0].doublePrice !== 0 && (
        <RadioDiv>
          <label>double ( + £{doublePrice.toFixed(2)} )</label>
          <input type="radio" value={double} name="size" required />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default DoubleSize;
