import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTwoMeats } from "../../../store/final-item/final-item.action";
import { selectTwoMeats } from "../../../store/final-item/final-item.selector";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import TooManyMeatsSelected from "./too-many-meats-selected.component";
import { numberOfMeatsChosenCheck } from "../../../reusable-functions/multiple-checkboxes-selectable-checks";

import { defaultMeats } from "./default-meats";
import { twoMeatsCheckboxes } from "./two-meats-checkbox";

import {
  OptionsForm,
  RequiredDiv,
  Section,
  RadioDiv,
  ChoiceHeading,
  OptionsLabel,
} from "../../../styles/options-form/options-form.styles";

const ChooseTwoMeats = () => {
  const [chosenTwoMeats, setChosenTwoMeats] = useState(defaultMeats);
  const product = useSelector(selectIndividualProduct);
  const twoMeatsSelected = useSelector(selectTwoMeats);

  const { optionsAvailable } = product;
  const dispatch = useDispatch();

  const handleMeatsChange = (event) => {
    const { name } = event.target;
    const meatsChecked = event.target.checked;
    setChosenTwoMeats({
      ...chosenTwoMeats,
      [name]: meatsChecked,
    });
  };

  useEffect(() => {
    dispatch(addTwoMeats(chosenTwoMeats));
  }, [dispatch, chosenTwoMeats]);

  return (
    <>
      {optionsAvailable[0].meatsAvailable === 2 && (
        <OptionsForm onChange={handleMeatsChange}>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <ChoiceHeading>choose 2 meats:</ChoiceHeading>
          </Section>

          <RadioDiv>
            {twoMeatsCheckboxes.map((checkbox) => (
              <Fragment key={checkbox.id}>
                <OptionsLabel>{checkbox.label}</OptionsLabel>
                <input
                  className="checkbox"
                  type="checkbox"
                  id={checkbox.name}
                  name={checkbox.name}
                  checked={checkbox.checked}
                />
                <hr />
              </Fragment>
            ))}
          </RadioDiv>
        </OptionsForm>
      )}
      {optionsAvailable[0].meatsAvailable === 2 &&
        !numberOfMeatsChosenCheck(twoMeatsSelected) && <TooManyMeatsSelected />}
    </>
  );
};

export default ChooseTwoMeats;
