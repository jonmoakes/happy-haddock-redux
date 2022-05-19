import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addSauces } from "../../../store/final-item/final-item.action";
import { selectSaucesSelected } from "../../../store/final-item/final-item.selector";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import TooManySaucesSelected from "./too-many-sauces-selected.component";
import { numberOfSaucesChosenCheck } from "../../../reusable-functions/sauces-checks";

import { defaultSauces } from "./default-sauces";
import { saucesCheckboxes } from "./sauces-checkboxes";

import {
  OptionsForm,
  RequiredDiv,
  Section,
  RadioDiv,
  ChoiceHeading,
  OptionsLabel,
} from "../../../styles/options-form/options-form.styles";

const ChooseSauces = () => {
  const [chosenSauces, setChosenSauces] = useState(defaultSauces);
  const product = useSelector(selectIndividualProduct);
  const saucesSelected = useSelector(selectSaucesSelected);

  const { saucesAvailable } = product;
  const dispatch = useDispatch();

  const handleSaucesChange = (event) => {
    const { name } = event.target;
    const sauceChecked = event.target.checked;
    setChosenSauces({ ...chosenSauces, [name]: sauceChecked });
  };

  useEffect(() => {
    dispatch(addSauces(chosenSauces));
  }, [dispatch, chosenSauces]);

  return (
    <>
      {saucesAvailable && (
        <OptionsForm onChange={handleSaucesChange}>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <ChoiceHeading>choose up to 3 sauces:</ChoiceHeading>
          </Section>

          <RadioDiv>
            {saucesCheckboxes.map((checkbox) => (
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
      {saucesAvailable && !numberOfSaucesChosenCheck(saucesSelected) && (
        <TooManySaucesSelected />
      )}
    </>
  );
};

export default ChooseSauces;
