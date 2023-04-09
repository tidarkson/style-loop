import React from 'react'
import {products} from '../db'
import SingleProduct from './SingleProduct'

function Products() {
  return (
    <>
        <section className='product grid grid-cols-2 md:grid-cols-4 justify-center gap-3 px-5 xl:px-20 py-5'>
            {products.map((product, index) =>
                <SingleProduct product ={product} key={index}/>
        )}
        </section>
    </>
  )
}

export default Products