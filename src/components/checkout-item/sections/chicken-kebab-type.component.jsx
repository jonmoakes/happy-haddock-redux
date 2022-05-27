const ChickenKebabType = ({ chickenKebabType }) => (
  <>
    {chickenKebabType && (
      <>
        <span>type:</span>
        <p>{chickenKebabType}</p>
      </>
    )}
  </>
);

export default ChickenKebabType;
