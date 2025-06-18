import React from 'react'
import {categories} from '../../db'
import CategoryItem from './CategoryItem'


function Categories() {
  return (
    <>
        <section className='pt-20 scroll-smooth'>
        <div className='md:max-w-4xl my-3 px-10 md:px-16'>
        <h3 className='uppercase text-slate-900 font-bold text-2xl'>Featured Collection</h3>
        <p className='py-5'>Our collection features high-quality products and craftsmanship, ensuring that each piece you purchase is not only beautiful but also built to last. With affordable prices and a wide range of options, we believe that everyone deserves to look and feel at their best</p>
        <button className='button-class text-white uppercase px-3 '>see all</button>
        </div>
          <div className='flex flex-col md:flex-row gap-3 p-10 snap-x'>
          {categories.map((item, index)=>
                <CategoryItem item={item} key={index}/>
            )}
          </div>
        </section>
    </>
  )
}

export default Categories