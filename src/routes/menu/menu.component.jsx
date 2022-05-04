import { Routes, Route } from "react-router-dom";

import CategorySelection from "../category-selection/category-selection.component";
import Category from "../category/category.component";

const Menu = () => {
  return (
    <Routes>
      <Route index element={<CategorySelection />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Menu;
