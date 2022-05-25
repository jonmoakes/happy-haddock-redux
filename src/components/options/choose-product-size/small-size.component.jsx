import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { small } from "../../../strings/strings";

const SmallSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { sizePrices } = product;

  return (
    <>
      {sizePrices[0].smallPrice && (
        <RadioDiv>
          <hr />
          <label>small</label>
          <input type="radio" value={small} name="size" />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default SmallSize;
