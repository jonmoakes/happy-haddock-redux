const Sauces = ({ saucesSelected }) => {
  const sauces = Object.keys(saucesSelected).filter(
    (key) => saucesSelected[key]
  );

  return (
    <>
      {sauces.length ? (
        <>
          <span>sauces selected:</span>
          {sauces.map((sauce) => (
            <p key={sauce}>
              {sauce === "bbq"
                ? sauce.replace(/\B([A-Z])\B/g, " $1").toUpperCase()
                : sauce.replace(/\B([A-Z])\B/g, " $1")}
            </p>
          ))}
        </>
      ) : null}
    </>
  );
};

export default Sauces;
