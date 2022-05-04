import { useState, useEffect } from "react";

const Salad = ({ salad }) => {
  const [saladChosen, setSaladChosen] = useState(undefined);

  useEffect(() => {
    if (salad) {
      const chosenSalad = Object.keys(salad).filter(
        (sal) => salad[sal] === true
      );
      setSaladChosen(chosenSalad);
    }
  }, [salad]);

  return (
    <>
      {saladChosen && Object.keys(saladChosen).length > 0 ? (
        <>
          <span>salad:</span>
          <p>yes</p>
        </>
      ) : (
        saladChosen &&
        Object.keys(saladChosen).length === 0 && (
          <>
            <span>salad:</span>
            <p>no</p>
          </>
        )
      )}
    </>
  );
};

export default Salad;
