const MixedKebabType = ({ mixedKebabType }) => (
  <>
    {mixedKebabType && (
      <>
        <span>type:</span>
        <p>{mixedKebabType}</p>
      </>
    )}
  </>
);

export default MixedKebabType;
