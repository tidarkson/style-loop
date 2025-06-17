// import Cart from "./utilities/Cart";
import Homepage from "./homepage/Homepage";
import Product from "./products/ViewSingleProduct";
import ProductList from "./products/ViewAllProducts";
// import Register from "./authentication/SignUp";
import ScrollToTop from "./facilities/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BounceLoader from "react-spinners/BounceLoader";
// import { useState } from "react";
import Navbar from "./homepage/components/Navbar";
import SignIn from "./authentication/SignIn";
import Authentication from "./authentication/Authentication";
// import Footer from "./homepage/components/Footer";

function App() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/:name" element={<Product />} />
          <Route path="/auth" element={<Authentication />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
