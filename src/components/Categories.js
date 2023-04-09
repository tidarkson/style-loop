import React from 'react'
import {categories} from '../db'
import CategoryItem from './CategoryItem'

function Categories() {
  return (
    <>
        <section className='flex flex-col md:flex-row p-10 xl:p-20 gap-3'>
            {categories.map((item, index)=>
                <CategoryItem item={item} key={index}/>
            )}
        </section>
    </>
  )
}

export default Categories