import React from 'react'

function CategoryItem({item}) {
    const {id, image, title} = item
  return (
    <>
        <div key={id} className='flex-1 relative'>
            <div>
                <img src={image} alt="" className='w-full cover'/>
            </div>

            <div className='flex flex-col text-white absolute top-0 left-0 items-center justify-center h-full w-full'>
                <h2 className='uppercase font-bold text-4xl'>{title}</h2>
                <button className='uppercase text-lg px-2 py-1 bg-red-800 text-white'>shop now</button>
            </div>

        </div>
    </>
  )
}

export default CategoryItem