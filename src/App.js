import Cart from "./Pages/Cart";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Homepage/>} />
          <Route path='/product-list' element= {<ProductList/>} />
          <Route path='/:name' element= {<Product/>} />
        </Routes>
      </BrowserRouter>
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
    </>
  );
}

export default App;
