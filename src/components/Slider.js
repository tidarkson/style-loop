import React, { useState } from 'react'
import { data } from '../db'
import {MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft} from 'react-icons/md'


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [slides] = useState(data)

    const handleClick = (direction) => {
        if (direction === "prev") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 :0)
        }
    }


    return (
        <>
            <section>
                <div className='relative flex items-center justify-center overflow-hidden' >
                    <button className='absolute top-0 bottom-0 my-auto left-10 text-slate-900 cursor-pointer z-10' onClick={() => handleClick("prev")}><MdOutlineKeyboardDoubleArrowLeft className='text-3xl text-slate-400'/></button>
                    <div className='wrapper flex transition ease-in duration-1000 delay-1000'>
                        {
                            slides.map((slide, index) => {
                                const { image, desc, title, link } = slide

                                return (
                                    <div key={index} className="relative slide flex flex-col md:flex-row items-center justify-center gap-5 w-screen transition-transform ease-out duration-500" style={{ transform: `translateX(-${slideIndex * 100}%)`, }}>
                                        <div><img src={image} alt="" className='w-screen' /></div>
                                        <div className='absolute xl:static top-0 left-0 flex flex-col justify-center items-center w-full h-full px-5 xl:px-20'>
                                            <h3 className='uppercase xl:text-slate-900 text-4xl font-bold tracking-wider'>{title}</h3>
                                            <p className='uppercase text-sm md:text-base text-white xl:text-slate-900 tracking-widest my-5'>{desc}</p>
                                            <button className='uppercase text-white bg-red-800 tracking-wider px-2 py-1 font-bold'>{link}</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className='absolute top-0 bottom-0 my-auto right-10 cursor-pointer' onClick={() => handleClick("next")}><MdOutlineKeyboardDoubleArrowRight className='text-3xl'/></button>
                </div>
            </section>

        </>
    )
}

export default Slider 