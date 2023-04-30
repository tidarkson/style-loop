import Cart from "./Pages/Cart";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BounceLoader from "react-spinners/BounceLoader";
import { useState, useEffect } from "react";



function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])


  return (
    <>
      {
        loading ?
          <div className="flex flex-col items-center justify-center text-center w-full h-full"><BounceLoader
            color={'#BCD8C1'}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"/>
            <h1 className='uppercase text-2xl text-slate-900 text-center xl:text-start font-extrabold tracking-widest'><span className="logo">➰</span>style loop</h1>
          </div>
          :
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/product-list' element={<ProductList />} />
              <Route path='/:name' element={<Product />} />
            </Routes>
          </BrowserRouter>
      }
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
    </>
  );
}

export default App;
