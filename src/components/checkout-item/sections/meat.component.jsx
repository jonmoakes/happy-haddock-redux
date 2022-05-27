import {
  mixedMeatsThreeMeatsKebab,
  mixedThreeMeatKebabMeal,
} from "../../../strings/strings";

const Meat = ({ name, oneMeat }) => (
  <>
    {(name === mixedMeatsThreeMeatsKebab ||
      name === mixedThreeMeatKebabMeal) && (
      <>
        <span>meat:</span>
        <p>doner, tikka & mediterranean</p>
      </>
    )}

    {oneMeat && (
      <>
        <span>meat chosen:</span>
        <p>{oneMeat}</p>
      </>
    )}
  </>
);

export default Meat;
