import { NameDiv } from "../checkout-item.styles";

import {
  fishcake,
  miniFishAndChips,
  smallFishcakeAndChips,
  smallSausageChipsAndFishcake,
} from "../../../strings/strings";

const ProductName = ({ name }) => {
  const transformDrinksName = () => {
    return name.includes("( drinks )") && true;
  };

  const transformFishName = () => {
    return (
      name !== fishcake &&
      name !== miniFishAndChips &&
      name !== smallFishcakeAndChips &&
      name !== smallSausageChipsAndFishcake &&
      true
    );
  };

  return (
    <>
      {transformDrinksName() ? (
        <NameDiv>{name.replace("( drinks )", "")}</NameDiv>
      ) : transformFishName() ? (
        <NameDiv>{name.replace("fish", "")}</NameDiv>
      ) : (
        <NameDiv>{name}</NameDiv>
      )}
    </>
  );
};

export default ProductName;
