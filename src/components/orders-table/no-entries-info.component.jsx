import { Div } from "../styles/div/div.styles";

const NoEntriesInfo = ({ data, errorMessage }) => (
  <>
    {data.length === 0 && errorMessage === "" && (
      <Div className="no-entries">
        <p>no entries yet. you will see data when you receive an order.</p>
      </Div>
    )}
  </>
);

export default NoEntriesInfo;
