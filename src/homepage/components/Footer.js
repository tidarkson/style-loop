import React from 'react'
import { FaFacebook, FaInstagram, FaPhoneAlt, FaPinterest } from 'react-icons/fa'
import { MdLocationPin, MdEmail } from 'react-icons/md'
import { Outlet } from 'react-router-dom'

function Footer() {
    return (
        <>
        <Outlet/>
            <section className='footer md:flex items-center justify-center p-10'>
                <div className='flex-1 md:text-center'>
                    <h1 className='logo2 uppercase text-2xl font-bold tracking-widest'>style loop➰</h1>
                    <p className='my-3   text-sm'>Get stylish with us. Our collection includes the latest styles and designs that will make you stand out from the crowd.</p>
                    <div className='flex items-center gap-3 md:justify-center'>
                        <FaFacebook className='text-2xl' />
                        <FaInstagram className='text-2xl' />
                        <FaPinterest className='text-2xl' />
                    </div>
                </div>

                <div className='flex-1 md:text-center my-8'>
                    <h3 className='text-2xl uppercase font-bold mb-2'>useful links</h3>
                    <ul className='text-sm'>
                        <li className=''>my account</li>
                        <li className=''>tracking order</li>
                        <li className=''>wishlist</li>
                        <li className=''>terms & conditions</li>
                    </ul>
                </div>

                <div className='flex-1 md:text-center text-sm'>
                    <h3 className='text-2xl uppercase font-bold mb-2'>contact us</h3>
                    <p className='flex items-center gap-2'><MdLocationPin className='text-lg' /> P10245 Style Loop venue, Uyo, Aks</p>
                    <p className='flex items-center gap-2 my-3'><FaPhoneAlt className='text-lg' /> +234 823 000 0000</p>
                    <p className='flex items-center gap-2'><MdEmail className='text-lg' />styleloop@email.com</p>
                </div>
            </section>
        </>
    )
}

export default Footer