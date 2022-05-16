import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { nineNuggets } from "../../../strings/strings";

const NineNuggetsSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { nineNuggetsPrice } = product;

  return (
    <>
      {nineNuggetsPrice !== 0 && (
        <RadioDiv>
          <label>
            9 nuggets
            <input type="radio" value={nineNuggets} name="size" />
          </label>
        </RadioDiv>
      )}
    </>
  );
};

export default NineNuggetsSize;
