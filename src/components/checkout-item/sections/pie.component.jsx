const PieOption = ({ name, pie }) => {
  return (
    <>
      {pie && (
        <>
          {name === "any pudding & chips" ? (
            <span>pudding:</span>
          ) : (
            <span>pie</span>
          )}

          <p>{pie}</p>
        </>
      )}
    </>
  );
};

export default PieOption;
