import React, {useState, useEffect} from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { products } from '../db'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {Link, useParams} from 'react-router-dom'


function Product() {
    const [singleProduct, setSingleProduct] = useState([])
    const {name} = useParams()

    useEffect(()=> {
        const findProduct =()=>{
            const newProduct = products.find((product)=>product.name === name)
            setSingleProduct(newProduct)
        }
        findProduct()
    }, [name])

    return (
        <>
            <Announcement />
            <Navbar />
            <section className="flex p-10 product">
                <div className="flex-1">
                    <img src={singleProduct.image} alt="" className="w-3/4 h-4/5 cover mx-auto" />
                </div>
                <div className="flex-1 px-10">
                    <div>
                        <h3 className="text-3xl font-bold text-slate-900 uppercase">{name}</h3>
                        <p className='my-10'>Our collection features a variety of styles and colors to suit every taste and occasion. With attention to detail and quality craftsmanship, our handbags are sure to elevate any outfit and become a statement piece in your wardrobe. Invest in our handbag collection today and experience the perfect blend of style and functionality.</p>
                        <span className='text-3xl'>N{singleProduct.price}</span>
                    </div>

                    <div className='flex items-center justify-between w-3/4 my-10'>
                        <div className='filter flex items-center gap-2'>
                            <h4>Color</h4>
                            <div className='w-5 h-5 rounded-full bg-blue-900 cursor-pointer'></div>
                            <div className='w-5 h-5 rounded-full bg-slate-900 cursor-pointer'></div>
                            <div className='w-5 h-5 rounded-full bg-teal-900 cursor-pointer'></div>
                        </div>
                        <div className='filter flex gap-3'>
                            <h4>Size</h4>
                            <select name="FilterSize" id="">
                                <option value="select" disabled>--Select Size--</option>
                                <option value="">XS</option>
                                <option value="">S</option>
                                <option value="">M</option>
                                <option value="">L</option>
                                <option value="">XL</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center justify-start gap-3'>
                        <AiOutlineMinus />
                        <span className='w-5 h-5 border border-1 border-slate-900 rounded flex justify-center items-center'>1</span>
                        <AiOutlinePlus />
                        </div>
                        <button className='text-white px-3 py-1 bg-red-800 uppercase my-5'>add to cart</button>
                    </div>
                </div>
            </section>
            <Newsletter />
            <Footer />
        </>
    )
}

export default Product