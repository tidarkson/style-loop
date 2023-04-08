import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import FilterContainer from '../components/FilterContainer'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'



function ProductList() {
  return (
    <>
        <Announcement/>
        <Navbar/>
        <FilterContainer/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </>
  )
}

export default ProductList