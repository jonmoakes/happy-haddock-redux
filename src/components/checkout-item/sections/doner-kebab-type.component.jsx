const DonerKebabType = ({ donerKebabType }) => (
  <>
    {donerKebabType && (
      <>
        <span>type:</span>
        <p>{donerKebabType}</p>
      </>
    )}
  </>
);

export default DonerKebabType;
