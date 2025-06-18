import React from 'react'
import {BsSendFill} from 'react-icons/bs'

function Newsletter() {
  return (
    <section>
        <div className='flex flex-col items-center justify-center px-10 py-10 gap-3'>
            <h3 className=' text-2xl font-bold'>Newsletter</h3>
            <p className='xl:text-lg'>Get timely updates about your favourite products</p>
            <div className='flex gap-3'>
                <input type="text" placeholder='your email' className='w-5/6 outline-none border border-2 px-5 rounded'/>
                <button className='button-class px-5 rounded'><BsSendFill className='text-white'/></button>
            </div>
        </div>
        
    </section>
  )
}

export default Newsletter