import styled from "styled-components";

import CustomButton from "../../custom-button/custom-button.component";

export const DisabledButton = styled(CustomButton)`
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
`;
