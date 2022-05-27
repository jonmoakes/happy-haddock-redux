const TwoCondiments = ({ twoCondiments }) => {
  const { peas, beans, curry, gravy } = twoCondiments;

  return (
    <>
      {(peas || beans || curry || gravy) && <span>condiments chosen:</span>}
      {peas && <p>peas</p>}
      {beans && <p>beans</p>}
      {curry && <p>curry</p>}
      {gravy && <p>gravy</p>}
    </>
  );
};

export default TwoCondiments;
