const SpecialInstructions = ({ specialInstructions }) => (
  <>
    {specialInstructions && (
      <>
        <span>special instructions:</span>
        <p>{specialInstructions}</p>
      </>
    )}
  </>
);

export default SpecialInstructions;
