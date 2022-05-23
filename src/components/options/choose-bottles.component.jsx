import { useDispatch, useSelector } from "react-redux";

import { addBottles } from "../../store/final-item/final-item.action";
import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  OptionsForm,
  Section,
  RadioDiv,
  RequiredDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseBottles = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();
  const { bottlesAvailable } = product;

  const handleCanChange = (event) => {
    dispatch(addBottles(event.target.value));
  };

  return (
    <>
      {bottlesAvailable && (
        <OptionsForm onChange={handleCanChange}>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <p>Choose Your Drink</p>
          </Section>

          <RadioDiv>
            <hr />
            <label>pepsi</label>
            <input type="radio" value="pepsi" name="bottles" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>7UP</label>
            <input type="radio" value="7UP" name="bottles" />
            <hr />
          </RadioDiv>
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseBottles;
