const Meat = ({ name, meat }) => (
  <>
    {(name === "mixed meats ( 3 meats ) kebab" ||
      name === "mixed 3 meat kebab meal") && (
      <>
        <p></p>
        <span>meat:</span>
        <p>doner, tikka & mediterranean</p>
      </>
    )}

    {meat && (
      <>
        <p></p>
        <span>meat chosen:</span>
        <p>{meat}</p>
      </>
    )}
  </>
);

export default Meat;
