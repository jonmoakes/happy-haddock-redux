import CustomButton from "../custom-button/custom-button.component";

import { SumInfoDiv } from "./orders-table.styles";

const SumInfo = () => {
  return (
    <>
      <SumInfoDiv>
        <p>
          you can either uncheck individual rows ( which will updated the
          combined total of selected entries as you do so ), or press the clear
          selected entries button below. this will reload the page and show the
          full table again.
        </p>
      </SumInfoDiv>

      <CustomButton
        className="sum-info"
        onClick={() => window.location.reload()}
      >
        Clear Selected Entries
      </CustomButton>
    </>
  );
};

export default SumInfo;
