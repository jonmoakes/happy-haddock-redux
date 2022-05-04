const Sizes = ({ size }) => (
  <>
    {size && (
      <>
        <span>size:</span>
        <p>{size}</p>
      </>
    )}
  </>
);

export default Sizes;
