import React from 'react'
import { products } from '../../db'
import SingleProduct from './ProductCard'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <>
      <div className='md:max-w-4xl my-3 px-10 md:px-16'>
        <h3 className='uppercase text-slate-900 font-bold text-2xl'>selected products</h3>
        <p className='py-5'>From chic dresses to trendy tops, our collection has it all. Discover the latest fashion trends that are designed to make you look and feel at your best</p>
        <Link to='/product-list' className='button-class text-white uppercase px-3 '>see all</Link>
      </div>
      <section className='product grid grid-cols-2 md:grid-cols-4 justify-center gap-3 px-5 xl:px-20 py-5'>
        {products.map((product, index) =>
          <SingleProduct product={product} key={index} />
        )}
      </section>
    </>
  )
}

export default Products