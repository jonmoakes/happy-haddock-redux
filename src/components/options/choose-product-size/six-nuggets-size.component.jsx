import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { sixNuggets } from "../../../strings/strings";

const SixNuggetsSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { sixNuggetsPrice } = product;

  return (
    <>
      {sixNuggetsPrice !== 0 && (
        <RadioDiv>
          <label>
            6 nuggets
            <input type="radio" value={sixNuggets} name="size" />
          </label>
        </RadioDiv>
      )}
    </>
  );
};

export default SixNuggetsSize;
