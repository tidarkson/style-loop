import { useContext } from "react";
import { products } from "../db";

export const ProductsContext = useContext({
  products: [],
})

export const ProductsProvider = ({ children }) => {
  const [product, setProduct] = useState(products);

  // Function to fetch products from the database or API
  const fetchProducts = async () => {
    try {
      // Simulate fetching products
      setProduct(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}