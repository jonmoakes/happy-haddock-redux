import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";

import { setProducts } from "../../store/products/product.action";

import CategorySelection from "../category-selection/category-selection.component";
import Category from "../category/category.component";

const Menu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductsMap = async () => {
      const productsArray = await getCollectionAndDocuments();
      dispatch(setProducts(productsArray));
    };
    getProductsMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategorySelection />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Menu;
