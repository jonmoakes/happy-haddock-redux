import { useState, useEffect } from "react";

const TwoMeatsOptions = ({ twoMeats }) => {
  const [meats, setMeats] = useState(undefined);

  useEffect(() => {
    if (twoMeats) {
      const chosenTwoMeats = Object.keys(twoMeats).filter(
        (meats) => twoMeats[meats] === true
      );
      setMeats(chosenTwoMeats);
    }
  }, [twoMeats]);
  return (
    <>
      {meats && (
        <>
          <span>meats chosen:</span>
          {meats.map((meat) => (
            <p key={meat}>{meat}</p>
          ))}
        </>
      )}
    </>
  );
};

export default TwoMeatsOptions;
