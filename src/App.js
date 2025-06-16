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
      {/* {loading ? (
        <div className="flex flex-col items-center justify-center text-center w-full h-full">
          <BounceLoader
            color={"#BCD8C1"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h1 className="uppercase text-2xl text-slate-900 text-center xl:text-start font-extrabold tracking-widest">
            <span className="logo">➰</span>style loop
          </h1>
        </div>
      ) : (
       
      )} */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/:name" element={<Product />} />
          </Route>
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
