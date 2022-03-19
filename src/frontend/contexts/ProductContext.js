import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
const ProductContext = createContext();

const useProducts = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProvider must be used within a ProductsProvider");
  }

  return context;
};
const ProductsProvider = ({ children }) => {
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data.products);
      } catch (err) {
        console.error(err.message);
      }
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
