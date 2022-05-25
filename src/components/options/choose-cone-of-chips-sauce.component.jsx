import { useDispatch, useSelector } from "react-redux";

import { addConeOfChipsSauce } from "../../store/final-item/final-item.action";
import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  OptionsForm,
  Section,
  RadioDiv,
  RequiredDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseConeOfChipsSauce = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();
  const { optionsAvailable } = product;

  const handleCanChange = (event) => {
    dispatch(addConeOfChipsSauce(event.target.value));
  };

  return (
    <>
      {optionsAvailable[0].coneOfChipsSauceAvailable && (
        <OptionsForm onChange={handleCanChange}>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <p>choose sauce</p>
          </Section>

          <RadioDiv>
            <hr />
            <label>mayo</label>
            <input type="radio" value="mayo" name="coneOfChipsSauce" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>relish</label>
            <input type="radio" value="relish" name="coneOfChipsSauce" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>ketchup</label>
            <input type="radio" value="ketchup" name="coneOfChipsSauce" />
            <hr />
          </RadioDiv>
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseConeOfChipsSauce;
