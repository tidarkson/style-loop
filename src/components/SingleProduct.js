import React from 'react'
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'

function SingleProduct({ product }) {
    const { image, name, price, link } = product
    return (
        <>
            <div className='h-full w-full relative' >
                <img src={image} alt="" className='h-3/4 w-full' />

                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center gap-1 md:gap-3 opacity-80'>
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
                <div>
                     <div className='flex flex-col'>
                    <p className='font-bold text-xl'>{name}</p>
                    <p>NGN{price}</p>
                    <p className='font-bold cursor-pointer underline'>{link}&rarr;</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct