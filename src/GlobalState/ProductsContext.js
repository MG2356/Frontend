import React, { createContext, useEffect, useReducer, useState } from "react";
import { ProductReducer } from "./ProductReducer";
import {apiUrl} from '../utils/app.utils' 
export const productsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log(`${apiUrl}/getProduct`)
        const response = await fetch(`${apiUrl}/getProduct`);
        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return (
    <productsContext.Provider value={products}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
