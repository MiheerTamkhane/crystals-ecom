import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
const ProductContext = createContext();

const useProducts = () => useContext(ProductContext);

const ProductsProvider = ({ children }) => {
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
    })();
  }, []);

  const [products, setProducts] = useState([]); // products is array of objects

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export { useProducts, ProductsProvider };
