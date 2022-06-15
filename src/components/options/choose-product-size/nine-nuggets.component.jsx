import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { nineNuggets } from "../../../strings/strings";

const NineNuggetsSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { sizePrices } = product;
  const nineNuggetsPrice = sizePrices[0].nineNuggetsPrice;

  return (
    <>
      {!!nineNuggetsPrice && (
        <RadioDiv>
          <label>9 nuggets ( + £{nineNuggetsPrice.toFixed(2)} )</label>
          <input type="radio" value={nineNuggets} name="size" />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default NineNuggetsSize;
