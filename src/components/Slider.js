import React, { useState } from 'react'
import data from '../slider.json'

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(3)
    const [sliderData] = useState(data)

    const handleClick = (direction) => {
        if (direction === "left"){
            setSlideIndex(slideIndex > 1? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <>
            <section>
                <div className='relative bg-red-800 flex items-center justify-center overflow-x-auto' >
                    <button className='absolute top-0 bottom-0 my-auto left-10 text-slate-900 cursor-pointer z-10' onClick={()=> handleClick("left")}>&larr;</button>
                    <div className={`wrapper flex ${slideIndex && 'translate-x-[100vw]'}`}>
                        {sliderData.data.map((data) => {
                            const { id,image, title, desc, link } = data

                            return (
                                <div className='slide w-screen flex items-center ' key={id}>
                                    <div className=''>
                                        <img src={image} className='h-2/5 w-3/4' />
                                    </div>
                                    <div>
                                        <h3 className='uppercase text-4xl font-bold tracking-wide text-white'>{title}</h3>
                                        <p className='uppercase tracking-wider my-5 text-white'>{desc}</p>
                                        <button className='uppercase px-2 py-1 bg-white'>{link}</button>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <button className='absolute top-0 bottom-0 my-auto right-10 text-white cursor-pointer' onClick={()=> handleClick("right")}>&rarr;</button>
                </div>
            </section>

        </>
    )
}

export default Slider