import { useState, useEffect } from "react";

const TwoCondimentsOptions = ({ twoCondiments }) => {
  const [condiments, setCondiments] = useState(undefined);

  useEffect(() => {
    if (twoCondiments) {
      const chosenCondiments = Object.keys(twoCondiments).filter(
        (condiment) => twoCondiments[condiment] === true
      );
      setCondiments(chosenCondiments);
    }
  }, [twoCondiments]);
  return (
    <>
      {condiments && (
        <>
          <span>condiments:</span>
          {condiments.map((condiment) => (
            <p key={condiment}>{condiment}</p>
          ))}
        </>
      )}
    </>
  );
};

export default TwoCondimentsOptions;
