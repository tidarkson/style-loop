import React from 'react'
import {categories} from '../db'
import CategoryItem from './CategoryItem'

function Categories() {
  return (
    <>
        <section className='p-10'>
        <h3 className='uppercase text-slate-900 font-bold text-2xl'>Top Collection</h3>
          <div className='flex flex-col md:flex-row gap-3'>
          {categories.map((item, index)=>
                <CategoryItem item={item} key={index}/>
            )}
          </div>
        </section>
    </>
  )
}

export default Categories