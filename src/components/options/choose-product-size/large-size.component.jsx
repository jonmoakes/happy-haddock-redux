import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { large } from "../../../strings/strings";

const LargeSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { sizePrices } = product;
  const largePrice = sizePrices[0].largePrice;

  return (
    <>
      {!!largePrice && (
        <RadioDiv>
          <label>large ( + £{largePrice.toFixed(2)} )</label>
          <input type="radio" value={large} name="size" />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default LargeSize;
