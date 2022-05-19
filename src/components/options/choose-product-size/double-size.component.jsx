import { useSelector } from "react-redux";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { double } from "../../../strings/strings";

const DoubleSize = () => {
  const product = useSelector(selectIndividualProduct);
  const { doublePrice } = product;

  return (
    <>
      {doublePrice !== 0 && (
        <RadioDiv>
          <label>double</label>
          <input type="radio" value={double} name="size" />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default DoubleSize;
