const Sizes = ({ chosenSize }) => (
  <>
    {chosenSize && (
      <>
        <span>size:</span>
        <p>{chosenSize}</p>
      </>
    )}
  </>
);

export default Sizes;
