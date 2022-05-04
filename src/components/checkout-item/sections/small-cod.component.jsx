import { useState, useEffect } from "react";

const SmallCod = ({ smallCod }) => {
  const [sCod, setSCod] = useState(undefined);

  useEffect(() => {
    if (smallCod) {
      const chosenSmallCod = Object.keys(smallCod).filter(
        (fish) => smallCod[fish] === true
      );
      setSCod(chosenSmallCod);
    }
  }, [smallCod]);
  return (
    <>
      {sCod && Object.keys(sCod).length > 0 && (
        <>
          <span>option:</span>
          <p>{sCod}</p>
        </>
      )}
    </>
  );
};

export default SmallCod;
