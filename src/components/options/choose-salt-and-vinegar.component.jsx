import { useDispatch, useSelector } from "react-redux";

import { addSaltAndVinegar } from "../../store/final-item/final-item.action";
import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  OptionsForm,
  RequiredDiv,
  Section,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseSaltAndVinegar = () => {
  const product = useSelector(selectIndividualProduct);

  const { optionsAvailable } = product;

  const dispatch = useDispatch();

  const handleSaltAndVinegarChange = (event) => {
    dispatch(addSaltAndVinegar(event.target.value));
  };

  return (
    <>
      {optionsAvailable[0].saltAndVinegarAvailable && (
        <OptionsForm onChange={handleSaltAndVinegarChange}>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <p>Salt & Vinegar?</p>
          </Section>

          <RadioDiv>
            <hr />
            <label>salt & vinegar</label>
            <input type="radio" value="both" name="saltAndVinegar" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>just salt</label>
            <input type="radio" value="just salt" name="saltAndVinegar" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>just vinegar</label>
            <input type="radio" value="just vinegar" name="saltAndVinegar" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>neither</label>
            <input type="radio" value="neither" name="saltAndVinegar" />
            <hr />
          </RadioDiv>
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseSaltAndVinegar;
