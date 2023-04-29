import React from 'react'

function CategoryItem({item}) {
    const { image, title} = item
  return (
    <>
        <div className='flex-1 relative'>
            <div className='w-full h-full'>
                <img src={image} alt="" className='w-full h-full cover'/>
            </div>

            <div className='flex flex-col text-white absolute top-0 left-0 items-center justify-center backdrop-brightness-50 h-full w-full'>
                <h3 className='uppercase text-slate-100 text-center font-bold text-4xl'>{title}</h3>
                <button className='butt uppercase text-lg px-2 py-1 bg-red-800 text-white'>shop now</button>
            </div>
        </div>
    </>
  )
}

export default CategoryItem