import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { twentyNuggets } from "../../../strings/strings";

const TwentyNuggetsSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { sizePrices } = product;
  const twentyNuggetsPrice = sizePrices[0].twentyNuggetsPrice;

  return (
    <>
      {!!twentyNuggetsPrice && (
        <RadioDiv>
          <label>20 nuggets ( +£{twentyNuggetsPrice.toFixed(2)} )</label>
          <input type="radio" value={twentyNuggets} name="size" />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default TwentyNuggetsSize;
