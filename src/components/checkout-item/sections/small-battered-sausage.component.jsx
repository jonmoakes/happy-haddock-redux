import { useState, useEffect } from "react";

const SmallBatteredSausage = ({ smallBatteredSausage }) => {
  const [sBatteredSausage, setSBatteredSausage] = useState(undefined);

  useEffect(() => {
    if (smallBatteredSausage) {
      const chosenSmallBatteredSausage = Object.keys(
        smallBatteredSausage
      ).filter((sausage) => smallBatteredSausage[sausage] === true);
      setSBatteredSausage(chosenSmallBatteredSausage);
    }
  }, [smallBatteredSausage]);
  return (
    <>
      {sBatteredSausage && Object.keys(sBatteredSausage).length > 0 && (
        <>
          <span>small battered sausage?</span>
          <p>yes</p>
        </>
      )}
    </>
  );
};

export default SmallBatteredSausage;
