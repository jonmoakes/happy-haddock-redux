import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { twelveNuggets } from "../../../strings/strings";

const TwelveNuggetsSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { sizePrices } = product;
  const twelveNuggetsPrice = sizePrices[0].twelveNuggetsPrice;

  return (
    <>
      {!!twelveNuggetsPrice && (
        <RadioDiv>
          <label>12 nuggets ( + {twelveNuggetsPrice.toFixed(2)} )</label>
          <input type="radio" value={twelveNuggets} name="size" />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default TwelveNuggetsSize;
