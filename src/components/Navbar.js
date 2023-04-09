import React from 'react'
import {AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'

function Navbar() {
    return (
        <>
            <nav className='px-3 md:px-10 py-5 flex items-center justify-between'>
                <article className='flex flex-1 items-center gap-2'>
                    <div className='hidden md:block'><h3 className='uppercase'>en</h3></div>
                    <div className='flex items-center justify-between border rounded md:px-2'>
                        <input type="text" placeholder='Search...' className=' outline-none w-3/4 md:w-full text-xs'/>
                        <AiOutlineSearch/>
                    </div>
                </article>

                <article className='cursor-pointer flex-grow'>
                    <h1 className='uppercase text-2xl md:text-4xl text-slate-900 text-center xl:text-start font-bold tracking-widest'>showty💦</h1>
                </article>

                <article className='flex items-center gap-3'>
                    <ul className='flex flex-col md:flex-row items-center md:gap-3'>
                        <li><button className='uppercase text-xs md:text-base'>register</button></li>
                        <li><button className='uppercase text-xs md:text-base'>sign in</button></li>
                    </ul>
                    <AiOutlineShoppingCart className='text-2xl'/>
                </article>
            </nav>
        </>
    )
}

export default Navbar