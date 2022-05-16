import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { twelveNuggets } from "../../../strings/strings";

const TwelveNuggetsSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { twelveNuggetsPrice } = product;

  return (
    <>
      {twelveNuggetsPrice !== 0 && (
        <RadioDiv>
          <label>
            12 nuggets
            <input type="radio" value={twelveNuggets} name="size" />
          </label>
        </RadioDiv>
      )}
    </>
  );
};

export default TwelveNuggetsSize;
