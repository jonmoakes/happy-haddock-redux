const AddOns = ({ gratedCheesePrice, donerMeatPrice, cheeseSliceSelected }) => (
  <>
    {(gratedCheesePrice || donerMeatPrice || cheeseSliceSelected) && (
      <span>add ons:</span>
    )}
    {gratedCheesePrice ? <p>grated cheese</p> : null}
    {donerMeatPrice ? <p>doner meat</p> : null}
    {cheeseSliceSelected ? <p>cheese slice</p> : null}
  </>
);

export default AddOns;
