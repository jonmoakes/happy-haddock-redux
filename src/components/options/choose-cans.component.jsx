import { useDispatch, useSelector } from "react-redux";

import { addCan } from "../../store/final-item/final-item.action";
import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  OptionsForm,
  Section,
  RadioDiv,
  RequiredDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseFromCansSelection = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();
  const { optionsAvailable } = product;

  const handleCanChange = (event) => {
    dispatch(addCan(event.target.value));
  };

  return (
    <>
      {optionsAvailable[0].drinkAvailable && (
        <OptionsForm onChange={handleCanChange}>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <p>Choose Your Drink</p>
          </Section>

          <RadioDiv>
            <hr />
            <label>coke</label>
            <input type="radio" value="coke" name="cans" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>diet coke</label>
            <input type="radio" value="diet coke" name="cans" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>coke zero</label>
            <input type="radio" value="coke zero" name="cans" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>lilt</label>
            <input type="radio" value="lilt" name="cans" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>7UP</label>
            <input type="radio" value="7UP" name="cans" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>rio</label>
            <input type="radio" value="rio" name="cans" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>fanta fruit twist</label>
            <input type="radio" value="fanta fruit twist" name="cans" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>fanta orange</label>
            <input type="radio" value="fanta orange" name="cans" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>dr pepper</label>
            <input type="radio" value="dr pepper" name="cans" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>dandelion & burdock</label>
            <input type="radio" value="dandelion & burdock" name="cans" />
            <hr />
          </RadioDiv>
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseFromCansSelection;
