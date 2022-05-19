import { useDispatch, useSelector } from "react-redux";

import { addSaltAndVinegar } from "../../store/final-item/final-item.action";
import {
  selectChosenSize,
  selectSaltAndVinegar,
} from "../../store/final-item/final-item.selector";
import { selectIndividualProduct } from "../../store/products/product.selector";

import { showSaltAndVinegarCheckPassed } from "../../reusable-functions/show-salt-and-vinegar-check";

import {
  OptionsForm,
  RequiredDiv,
  Section,
  RadioDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseSaltAndVinegar = () => {
  const chosenSize = useSelector(selectChosenSize);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const product = useSelector(selectIndividualProduct);

  const dispatch = useDispatch();

  const handleSaltAndVinegarChange = (event) => {
    dispatch(addSaltAndVinegar(event.target.value));
  };

  return (
    <>
      {showSaltAndVinegarCheckPassed(product, chosenSize, saltAndVinegar) && (
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
