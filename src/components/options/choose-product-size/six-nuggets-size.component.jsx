import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { sixNuggets } from "../../../strings/strings";

const SixNuggetsSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { sizePrices } = product;
  const sixNuggetsPrice = sizePrices[0].sixNuggetsPrice;

  return (
    <>
      {!!sixNuggetsPrice && (
        <RadioDiv>
          <hr />
          <label>6 nuggets</label>
          <input type="radio" value={sixNuggets} name="size" />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default SixNuggetsSize;
