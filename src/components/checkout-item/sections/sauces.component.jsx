import { useState, useEffect } from "react";

const Sauces = ({ sauces }) => {
  const [chosenSauces, setChosenSauces] = useState(undefined);

  useEffect(() => {
    if (sauces) {
      const saucesChosen = Object.keys(sauces).filter(
        (sauce) => sauces[sauce] === true
      );
      setChosenSauces(saucesChosen);
    }
  }, [sauces]);

  return (
    <>
      {chosenSauces && (
        <>
          <span>
            sauce(<span style={{ textTransform: "lowercase" }}>s</span>) chosen:
          </span>
          {chosenSauces.map((chosenSauce) => (
            <p key={chosenSauce}>{chosenSauce}</p>
          ))}
        </>
      )}
    </>
  );
};

export default Sauces;
