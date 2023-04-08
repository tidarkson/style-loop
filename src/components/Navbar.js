import React from 'react'
import {AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'

function Navbar() {
    return (
        <>
            <nav className='px-10 py-5 flex items-center justify-between'>
                <article className='flex items-center gap-2'>
                    <div><h3 className='uppercase'>en</h3></div>
                    <div className='flex items-center justify-center border rounded px-2'>
                        <input type="text" className='outline-none'/>
                        <AiOutlineSearch/>
                    </div>
                </article>

                <article className='cursor-pointer'>
                    <h1 className='uppercase text-4xl text-slate-900 font-bold tracking-widest'>showty💦</h1>
                </article>

                <article className='flex items-center gap-3'>
                    <ul className='flex items-center gap-3'>
                        <li><button className='uppercase'>register</button></li>
                        <li><button className='uppercase'>sign in</button></li>
                    </ul>
                    <AiOutlineShoppingCart className='text-2xl'/>
                </article>
            </nav>
        </>
    )
}

export default Navbar