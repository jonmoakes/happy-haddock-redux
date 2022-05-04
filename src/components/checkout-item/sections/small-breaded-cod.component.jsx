import { useState, useEffect } from "react";

const SmallBreadedCod = ({ smallBreadedCod }) => {
  const [sBreadedCod, setSBreadedCod] = useState(undefined);

  useEffect(() => {
    if (smallBreadedCod) {
      const chosenSmallCod = Object.keys(smallBreadedCod).filter(
        (fish) => smallBreadedCod[fish] === true
      );
      setSBreadedCod(chosenSmallCod);
    }
  }, [smallBreadedCod]);
  return (
    <>
      {sBreadedCod && Object.keys(sBreadedCod).length > 0 && (
        <>
          <span>option:</span>
          <p>{sBreadedCod}</p>
        </>
      )}
    </>
  );
};

export default SmallBreadedCod;
