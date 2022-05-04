import { useState, useEffect } from "react";
import { NameDiv } from "../checkout-item.styles";

const ProductName = ({ name }) => {
  const [drinksName, setDrinksName] = useState("");
  const [fishName, setFishName] = useState("");

  useEffect(() => {
    if (name.includes("( drinks )")) {
      setDrinksName(name.replace("( drinks )", ""));
    } else if (
      name !== "fishcake" &&
      name !== "mini fish & chips" &&
      name !== "small fishcake & chips" &&
      name !== "small sausage, chips & fishcake"
    ) {
      setFishName(name.replace("fish", ""));
    }
  }, [name]);

  return (
    <>
      {drinksName ? (
        <NameDiv>{drinksName}</NameDiv>
      ) : fishName !== "" ? (
        <NameDiv>{fishName}</NameDiv>
      ) : (
        <NameDiv>{name}</NameDiv>
      )}
    </>
  );
};

export default ProductName;
