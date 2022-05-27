const SingleCondiment = ({ singleCondiment }) => (
  <>
    {singleCondiment && (
      <>
        <span>condiment:</span>
        <p>{singleCondiment}</p>
      </>
    )}
  </>
);

export default SingleCondiment;
