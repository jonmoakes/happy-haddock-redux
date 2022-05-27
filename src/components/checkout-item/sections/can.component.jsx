import {
  goldenFilletSandwichMeal,
  miniFeastMeal,
  bargainBox,
} from "../../../strings/strings";
const Can = ({ name, can }) => (
  <>
    {name === goldenFilletSandwichMeal ||
    name === miniFeastMeal ||
    name === bargainBox ? (
      <>
        <span>chosen can:</span>
        <p>{can}</p>
      </>
    ) : (
      <p>{can} </p>
    )}
  </>
);

export default Can;
