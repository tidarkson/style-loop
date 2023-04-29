import React, { useState } from 'react'
import { data } from '../db'

const Slider = () => {


    return (
        <>
            <section className='px-3 md:px-10 py-5'>

                <div className='md:flex gap-5'>
                    <div>
                        <div className='my-3'>
                            <img src={data[0].image} alt="" className='md:w-3/5 mx-auto rounded-lg' />
                        </div>
                        <div className='flex justify-center'>
                            <img src={data[1].image} alt="" className='w-44 mx-auto rounded-lg' />
                            <img src={data[2].image} alt="" className='w-48 mx-auto rounded-lg' />
                        </div>

                    </div>
                    <div className='flex flex-col items-end justify-center max-w-lg text-end'>
                        <div className=''>
                            <h3 className='text-7xl font-bold tracking-wider'>Step into <br />
                            <span>Style</span></h3>
                        </div>
                        <div>
                            <p className='tracking-widest py-8'>We believe that fashion is an artform that should be accessible to all. We're thrilled to introduce our latest colection, inspired by the latest trends and styles from around the world</p>
                            <button className='butt uppercase text-white bg-red-800 tracking-wider px-2 py-1'>Browse our collection</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Slider 