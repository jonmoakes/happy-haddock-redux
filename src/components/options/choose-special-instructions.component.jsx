import { useDispatch, useSelector } from "react-redux";

import {
  selectSaucesSelected,
  selectChosenSize,
  selectSaltAndVinegar,
} from "../../store/final-item/final-item.selector";
import { selectIndividualProduct } from "../../store/products/product.selector";
import { addSpecialInstructions } from "../../store/final-item/final-item.action";

import { numberOfSaucesChosenCheck } from "../../reusable-functions/resuable-functions";

import {
  OptionsForm,
  Section,
  TextAreaDiv,
} from "../../styles/options-form/options-form.styles";

const ChooseSpecialInstructions = () => {
  const product = useSelector(selectIndividualProduct);
  const saucesSelected = useSelector(selectSaucesSelected);
  const saltAndVinegar = useSelector(selectSaltAndVinegar);
  const chosenSize = useSelector(selectChosenSize);
  const dispatch = useDispatch();

  const { hasSizeOption, noOptionsAvailable, saltAndVinegarAvailable } =
    product;

  const handleInstructionsChange = (event) => {
    dispatch(addSpecialInstructions(event.target.value));
  };

  return (
    <>
      {((hasSizeOption && numberOfSaucesChosenCheck(saucesSelected)) ||
        (!hasSizeOption && numberOfSaucesChosenCheck(saucesSelected)) ||
        noOptionsAvailable ||
        (hasSizeOption &&
          chosenSize &&
          saltAndVinegarAvailable &&
          saltAndVinegar)) && (
        <OptionsForm>
          <Section>
            <p>special instructions</p>
          </Section>

          <TextAreaDiv>
            <textarea
              type="text"
              name="specialInstructions"
              placeholder="Anything We Need To Know?"
              onChange={handleInstructionsChange}
            />
          </TextAreaDiv>
        </OptionsForm>
      )}
    </>
  );
};

export default ChooseSpecialInstructions;
