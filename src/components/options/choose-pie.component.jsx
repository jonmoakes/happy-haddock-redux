import { useDispatch, useSelector } from "react-redux";

import { addPie } from "../../store/final-item/final-item.action";
import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  OptionsForm,
  Section,
  RadioDiv,
  RequiredDiv,
} from "../../styles/options-form/options-form.styles";

const ChoosePie = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();
  const { optionsAvailable } = product;

  const handleCanChange = (event) => {
    dispatch(addPie(event.target.value));
  };

  return (
    <>
      {optionsAvailable[0].anyPieAvailable && (
        <OptionsForm onChange={handleCanChange}>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <p>choose pie</p>
          </Section>

          <RadioDiv>
            <hr />
            <label>meat & potato</label>
            <input type="radio" value="meat & potato" name="pie" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>steak & kidney</label>
            <input type="radio" value="steak & kidney" name="pie" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>all steak</label>
            <input type="radio" value="all steak" name="pie" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>chicken & mushroom</label>
            <input type="radio" value="chicken & mushroom" name="pie" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>cheese & onion</label>
            <input type="radio" value="cheese & onion" name="pie" />
            <hr />
          </RadioDiv>
        </OptionsForm>
      )}
    </>
  );
};

export default ChoosePie;
