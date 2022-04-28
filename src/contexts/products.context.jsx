import { createContext, useState, useEffect } from "react";
import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  productsMap: {},
});

export const ProductsProvider = ({ children }) => {
  const [productsMap, setProductsMap] = useState([]);

  useEffect(() => {
    const getProductsMap = async () => {
      const productMap = await getCollectionAndDocuments();
      console.log(productMap);
    };
    getProductsMap();
  }, []);
  const value = { productsMap };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
