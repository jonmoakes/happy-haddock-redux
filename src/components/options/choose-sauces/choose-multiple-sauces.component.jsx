import { Fragment } from "react";
import { saucesCheckboxes } from "./sauces-checkboxes";

import {
  Section,
  RadioDiv,
  ChoiceHeading,
  OptionsLabel,
} from "../../../styles/options-form/options-form.styles";

const ChooseMultipleSauces = () => (
  <>
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
  </>
);

export default ChooseMultipleSauces;
