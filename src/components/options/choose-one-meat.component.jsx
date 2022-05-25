import { useDispatch, useSelector } from "react-redux";

import { addOneMeat } from "../../store/final-item/final-item.action";
import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  OptionsForm,
  Section,
  RadioDiv,
  RequiredDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseOneMeat = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();
  const { optionsAvailable } = product;

  const handleCanChange = (event) => {
    dispatch(addOneMeat(event.target.value));
  };

  return (
    <>
      {optionsAvailable[0].meatsAvailable === 1 && (
        <OptionsForm onChange={handleCanChange}>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <p>Choose Meat</p>
          </Section>

          <RadioDiv>
            <hr />
            <label>tikka</label>
            <input type="radio" value="tikka" name="oneMeat" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>mediterranean</label>
            <input type="radio" value="mediterranean" name="oneMeat" />
            <hr />
          </RadioDiv>
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseOneMeat;
