const OneCondimentOption = ({ condiment }) => (
  <>
    {condiment && (
      <>
        <span>condiment:</span>
        <p>{condiment}</p>
      </>
    )}
  </>
);

export default OneCondimentOption;
