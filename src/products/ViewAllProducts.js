import React from 'react'
import FilterContainer from '../facilities/FilterContainer'
import Products from '../homepage/components/Products'
import Newsletter from '../homepage/components/Newsletter'
import Footer from '../homepage/components/Footer'



function ProductList() {
  return (
    <>
        <FilterContainer/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </>
  )
}

export default ProductList