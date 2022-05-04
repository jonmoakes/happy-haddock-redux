import { useState, useEffect } from "react";

const BreadedFish = ({ breadedFish }) => {
  const [bFish, setBFish] = useState(undefined);

  useEffect(() => {
    if (breadedFish) {
      const chosenBreadedFish = Object.keys(breadedFish).filter(
        (fish) => breadedFish[fish] === true
      );
      setBFish(chosenBreadedFish);
    }
  }, [breadedFish]);
  return (
    <>
      {bFish && Object.keys(bFish).length > 0 && (
        <>
          <span>option:</span>
          <p>{bFish}</p>
        </>
      )}
    </>
  );
};

export default BreadedFish;
