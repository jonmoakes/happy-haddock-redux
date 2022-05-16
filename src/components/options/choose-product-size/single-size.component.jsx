import { RadioDiv } from "../../../styles/options-form/options-form.styles";

import { single } from "../../../strings/strings";

const SingleSize = () => (
  <RadioDiv>
    <label>
      single
      <input type="radio" value={single} name="size" />
    </label>
  </RadioDiv>
);

export default SingleSize;
