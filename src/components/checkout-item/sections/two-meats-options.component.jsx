const TwoMeatsOptions = ({ twoMeats }) => {
  const { doner, tikka, mediterranean } = twoMeats;

  return (
    <>
      {(doner || tikka || mediterranean) && <span>meats chosen:</span>}
      {doner && <p>doner</p>}
      {tikka && <p>tikka</p>}
      {mediterranean && <p>mediterranean</p>}
    </>
  );
};

export default TwoMeatsOptions;
