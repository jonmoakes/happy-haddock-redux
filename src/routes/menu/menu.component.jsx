import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchProductsStart } from "../../store/products/product.action";

import CategorySelection from "../category-selection/category-selection.component";
import Category from "../category/category.component";

const Menu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategorySelection />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Menu;
