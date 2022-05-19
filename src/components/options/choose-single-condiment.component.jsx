import { useDispatch, useSelector } from "react-redux";

import { addSingleCondiment } from "../../store/final-item/final-item.action";
import { selectIndividualProduct } from "../../store/products/product.selector";

import {
  OptionsForm,
  Section,
  RadioDiv,
  RequiredDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseSingleCondiment = () => {
  const product = useSelector(selectIndividualProduct);
  const dispatch = useDispatch();

  const { condimentsAvailable } = product;

  const handleSingleCondimentChange = (event) => {
    dispatch(addSingleCondiment(event.target.value));
  };

  return (
    <>
      {condimentsAvailable === 1 && (
        <OptionsForm onChange={handleSingleCondimentChange}>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <p>condiment:</p>
          </Section>

          <RadioDiv>
            <hr />
            <label>peas</label>
            <input type="radio" value="peas" name="condiment" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>beans</label>
            <input type="radio" value="beans" name="condiment" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>curry</label>
            <input type="radio" value="curry" name="condiment" />
            <hr />
          </RadioDiv>

          <RadioDiv>
            <label>gravy</label>
            <input type="radio" value="gravy" name="condiment" />
            <hr />
          </RadioDiv>
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseSingleCondiment;
