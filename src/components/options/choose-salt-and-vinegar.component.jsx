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
  const dispatch = useDispatch();
  const product = useSelector(selectIndividualProduct);

  const { saltAndVinegarAvailable } = product;

  const handleSaltAndVinegarChange = (event) => {
    dispatch(addSaltAndVinegar(event.target.value));
  };

  return (
    <>
      {saltAndVinegarAvailable && (
        <OptionsForm onChange={handleSaltAndVinegarChange}>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <p>Salt & Vinegar?</p>
          </Section>

          <RadioDiv>
            <label>
              salt & vinegar
              <input type="radio" value="both" name="saltAndVinegar" />
            </label>
          </RadioDiv>

          <RadioDiv>
            <label>
              just salt
              <input type="radio" value="just salt" name="saltAndVinegar" />
            </label>
          </RadioDiv>

          <RadioDiv>
            <label>
              just vinegar
              <input type="radio" value="just vinegar" name="saltAndVinegar" />
            </label>
          </RadioDiv>

          <RadioDiv>
            <label>
              neither
              <input type="radio" value="neither" name="saltAndVinegar" />
            </label>
          </RadioDiv>
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseSaltAndVinegar;
