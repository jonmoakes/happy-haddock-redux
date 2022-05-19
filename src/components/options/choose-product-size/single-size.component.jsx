import { useSelector } from "react-redux";

import { selectIndividualProduct } from "../../../store/products/product.selector";

import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { single } from "../../../strings/strings";

const SingleSize = () => {
  const product = useSelector(selectIndividualProduct);

  const { doublePrice } = product;

  return (
    <>
      {doublePrice !== 0 && (
        <RadioDiv>
          <hr />
          <label>single</label>
          <input type="radio" value={single} name="size" />
          <hr />
        </RadioDiv>
      )}
    </>
  );
};

export default SingleSize;
