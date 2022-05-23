import { Fragment } from "react";
import { saucesCheckboxesWithoutNoSauceOption } from "./sauces-checkboxes";

import {
  Section,
  RadioDiv,
  ChoiceHeading,
  OptionsLabel,
} from "../../../styles/options-form/options-form.styles";

const ChooseOneSauce = () => (
  <>
    <Section>
      <ChoiceHeading>choose 1 sauce:</ChoiceHeading>
    </Section>

    <RadioDiv>
      {saucesCheckboxesWithoutNoSauceOption.map((checkbox) => (
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
  </>
);

export default ChooseOneSauce;
