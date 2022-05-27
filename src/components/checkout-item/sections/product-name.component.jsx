import { useState, useEffect } from "react";
import { NameDiv } from "../checkout-item.styles";

import {
  fishcake,
  miniFishAndChips,
  smallFishcakeAndChips,
  smallSausageChipsAndFishcake,
} from "../../../strings/strings";

const ProductName = ({ name }) => {
  const [drinksName, setDrinksName] = useState("");
  const [fishName, setFishName] = useState("");

  useEffect(() => {
    if (name.includes("( drinks )")) {
      setDrinksName(name.replace("( drinks )", ""));
    } else if (
      name !== fishcake &&
      name !== miniFishAndChips &&
      name !== smallFishcakeAndChips &&
      name !== smallSausageChipsAndFishcake
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
