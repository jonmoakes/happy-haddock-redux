import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTwoCondiments } from "../../../store/final-item/final-item.action";
import { selectTwoCondiments } from "../../../store/final-item/final-item.selector";
import { selectIndividualProduct } from "../../../store/products/product.selector";

import TooManyCondimentsSelected from "./too-many-condiments-selected.component";
import { numberOfCondimentsChosenCheck } from "../../../reusable-functions/multiple-checkboxes-selectable-checks";

import { defaultCondiments } from "./default-condiments";
import { twoCondimentsCheckboxes } from "./two-condiments-checkbox";

import {
  OptionsForm,
  RequiredDiv,
  Section,
  RadioDiv,
  ChoiceHeading,
  OptionsLabel,
} from "../../../styles/options-form/options-form.styles";

const ChooseTwoCondiments = () => {
  const [chosenTwoCondiments, setChosenTwoCondiments] =
    useState(defaultCondiments);
  const product = useSelector(selectIndividualProduct);
  const twoCondimentsSelected = useSelector(selectTwoCondiments);

  const { condimentsAvailable } = product;
  const dispatch = useDispatch();

  const handleCondimentsChange = (event) => {
    const { name } = event.target;
    const condimentsChecked = event.target.checked;
    setChosenTwoCondiments({
      ...chosenTwoCondiments,
      [name]: condimentsChecked,
    });
  };

  useEffect(() => {
    dispatch(addTwoCondiments(chosenTwoCondiments));
  }, [dispatch, chosenTwoCondiments]);

  return (
    <>
      {condimentsAvailable === 2 && (
        <OptionsForm onChange={handleCondimentsChange}>
          <RequiredDiv>
            <span>required</span>
          </RequiredDiv>

          <Section>
            <ChoiceHeading>choose 2 condiments:</ChoiceHeading>
          </Section>

          <RadioDiv>
            {twoCondimentsCheckboxes.map((checkbox) => (
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
      {condimentsAvailable === 2 &&
        !numberOfCondimentsChosenCheck(twoCondimentsSelected) && (
          <TooManyCondimentsSelected />
        )}
    </>
  );
};

export default ChooseTwoCondiments;
