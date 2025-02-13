import { createContext, useContext, useState, useEffect } from "react";

// Create context
const ProductContext = createContext();

// Custom hook to use the context
export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Smartphone", price: 600 }
    ];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
