import React from 'react'
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'

function SingleProduct({ product }) {
    const { image } = product
    return (
        <div className=' flex items-center justify-center relative' >
            <div className='w-full h-full flex justify-center'>
                <img src={image} alt="" className='w-3/4 cover h-4/5' />
            </div>
            <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center gap-3 opacity-80'>
                <div className='rounded-full w-50 p-2 h-50 hover:bg-red-800 hover:scale-125 bg-white cursor-pointer'>
                    <AiOutlineShoppingCart className='text-lg' />
                </div>
                <div className='rounded-full w-50 p-2 h-50 hover:bg-red-800 hover:scale-125 bg-white cursor-pointer'>
                    <AiOutlineSearch className='text-lg' />
                </div>
                <div className='rounded-full w-50 p-2 h-50 hover:bg-red-800 hover:scale-125 bg-white cursor-pointer'>
                    <AiOutlineHeart className='text-lg' />
                </div>
            </div>
        </div>
    )
}

export default SingleProduct