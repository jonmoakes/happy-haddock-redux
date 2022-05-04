const Cans = ({ name, cans }) => (
  <>
    {name === "golden fillet sandwich meal" ||
    name === "mini feast meal" ||
    name === "bargain box" ? (
      <>
        <span>chosen can:</span>
        <p>{cans}</p>
      </>
    ) : (
      <p>{cans} </p>
    )}
  </>
);

export default Cans;
