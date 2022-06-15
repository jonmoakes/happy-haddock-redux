import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { medium } from "../../../strings/strings";

const MediumSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { sizePrices } = product;
  const mediumPrice = sizePrices[0].mediumPrice;

  return (
    <>
      {!!mediumPrice && (
        <RadioDiv>
          <label>medium ( + £{mediumPrice.toFixed(2)} )</label>
          <input type="radio" value={medium} name="size" />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default MediumSize;
