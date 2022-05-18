import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { small } from "../../../strings/strings";

const SmallSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { smallPrice } = product;

  return (
    <>
      {smallPrice && (
        <RadioDiv>
          <label>
            small
            <input type="radio" value={small} name="size" />
          </label>
        </RadioDiv>
      )}
    </>
  );
};

export default SmallSize;
