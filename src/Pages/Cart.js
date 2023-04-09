import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { products } from '../db'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


function Cart() {
    const image = products[3].image

    return (
        <>
            <Announcement />
            <Navbar />
            <section className='cart px-10'>
                {/* cart  */}
                <div>
                    <h4 className='text-3xl font-bold text-slate-900 uppercase py-5'>your cart</h4>
                    <div className='flex items-center justify-between'>
                        <button className='px-3 py-1 uppercase bg-red-800 font-semibold text-white'>continue shopping</button>
                        <div className='space-x-5'>
                            <span className='underline'>Shopping bag 🛍 </span>
                            <span className='underline'>Your wishlist</span>
                        </div>

                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='py-10 flex flex-col gap-5'>
                            <div className='productDetail flex justify-start gap-5 flex-1'>
                                <img src={image} alt="" className='w-1/4 h-3/4 cover' />
                                <div className='flex flex-col gap-3'>
                                    <p><span className='font-semibold'>Product: </span> Name</p>
                                    <p><span className='font-semibold'>ID: </span> 95876</p>
                                    <p><span className='font-semibold'>Size: </span> 40</p>
                                    <p><span className='font-semibold'>Price: </span> $3700</p>
                                </div>
                            </div>

                            <div className='priceDetail flex items-center justify-start gap-3 flex-1'>
                                <AiOutlineMinus />
                                <span className='w-5 h-5 border border-1 border-slate-900 rounded flex justify-center items-center'>1</span>
                                <AiOutlinePlus />  
                                <span className='text-2xl font-semibold'>$3700</span>                             
                            </div>
                        </div>

                        <div className='my-5'>
                            <div>
                                <h4 className='uppercase text-lg font-semibold'>order summary</h4>
                            </div>

                            <table className='w-full border border-1 border-slate-900'>
                                <thead className='border border-1 border-slate-900 text-center'>
                                    <tr className='space-5 font-bold'>
                                        <td className='px-2'>Subtotal</td>
                                        <td className=''>Estimated Shipping</td>
                                        <td className='px-2'>Shipping Discount</td>
                                        <td className='px-2'>Total</td>
                                    </tr>
                                </thead>
                                <tbody className='border border-1 border-slate-900 text-center'>
                                    <tr>
                                        <td>$3700</td>
                                        <td>$40</td>
                                        <td>-$10</td>
                                        <td>$3700</td>

                                    </tr>
                                </tbody>
                            </table>
                            <button className='px-3 py-1 uppercase bg-red-800 font-semibold text-white w-full my-3'>checkout now</button>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Cart