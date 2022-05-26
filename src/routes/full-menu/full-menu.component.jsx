import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchProductsStart } from "../../store/products/product.action";

import CompleteMenu from "../complete-menu/complete-menu.component";

const FullMenu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return <CompleteMenu />;
};

export default FullMenu;
