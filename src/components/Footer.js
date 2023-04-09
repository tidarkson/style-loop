import React from 'react'
import { FaFacebook, FaInstagram, FaPhoneAlt, FaPinterest } from 'react-icons/fa'
import { MdLocationPin, MdEmail } from 'react-icons/md'

function Footer() {
    return (
        <>
            <section className='md:flex items-center justify-center bg-red-800 text-white p-10'>
                <div className='flex-1 md:text-center'>
                    <h1 className='logo2 uppercase text-4xl font-bold tracking-widest text-slate-900'>showty💦</h1>
                    <p className='my-3   text-sm'>Get stylish with us. Our collection includes the latest styles and designs that will make you stand out from the crowd.</p>
                    <div className='flex items-center gap-3 md:justify-center'>
                        <FaFacebook className='text-2xl' />
                        <FaInstagram className='text-2xl' />
                        <FaPinterest className='text-2xl' />
                    </div>
                </div>
                <div className='flex-1 md:text-center my-5'>
                    <h3 className='text-2xl uppercase font-bold mb-5'>useful links</h3>
                    <ul className='text-sm'>
                        <a href=""><li className=''>home</li></a>
                        <a href=""><li className=''>cart</li></a>
                        <a href=""><li className=''>assecories</li></a>
                        <a href=""><li className=''>my account</li></a>
                        <a href=""><li className=''>tracking order</li></a>
                        <a href=""><li className=''>wishlist</li></a>
                        <a href=""><li className=''>terms & conditions</li></a>


                    </ul>
                </div>
                <div className='flex-1 md:text-center text-sm'>
                    <h3 className='text-2xl uppercase font-bold mb-5'>contact us</h3>
                    <p className='flex items-center justify-start lowercase gap-2'><MdLocationPin className='text-2xl text-slate-900' /> P10245 FASHION VIEW AVENUE, LOS UYO, CA</p>
                    <p className='flex items-center justify-start gap-2 my-3'><FaPhoneAlt className='text-2xl text-slate-900' /> +234 823 000 0000</p>
                    <p className='flex items-center justify-start gap-2'><MdEmail className='text-2xl text-slate-900' />showty@email.com</p>
                </div>
            </section>
        </>
    )
}

export default Footer