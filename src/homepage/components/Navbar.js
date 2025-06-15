import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, Outlet } from 'react-router-dom'
import Announcement from './Announcement'
// import Footer from './Footer'


function Navbar() {
    return (
        <>
        <Announcement/>
            <nav className='px-3 md:px-10 py-5 flex items-center justify-between'>
                <article className='cursor-pointer'>
                  <Link to='/'><h1 className='uppercase text-2xl text-slate-900 text-center xl:text-start font-extrabold tracking-widest'><span className="logo">➰</span>style loop</h1></Link>  
                </article>

                <article className='hidden md:block'>
                    <ul className='flex items-center gap-5 md:px-2'>
                            <li className='tracking-widest cursor-pointer font-semibold'>Luxury</li>
                            <li className='tracking-widest cursor-pointer font-semibold'>Style</li>
                            <li className='tracking-widest cursor-pointer font-semibold'>Contact</li>
                    </ul>
                </article>

                <article className='flex items-center gap-3'>
                    <ul className='flex flex-col md:flex-row items-center md:gap-3'>
                        <li><button className='uppercase text-xs md:text-base px-3 py-1 border rounded'>log in</button></li>
                        <li><button className='butt uppercase text-white text-xs md:text-base px-3 py-1 rounded hidden md:block'>see collections</button></li>
                    </ul>
                    <AiOutlineShoppingCart className='text-2xl' />
                </article>
            </nav>
            <Outlet/>

            {/* <Footer/> */}
        </>
    )
}

export default Navbar