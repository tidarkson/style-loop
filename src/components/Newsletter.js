import React from 'react'
import {BsSendFill} from 'react-icons/bs'

function Newsletter() {
  return (
    <section>
        <div className='flex flex-col items-center justify-center py-10 gap-3'>
            <h2 className='uppercase text-4xl'>newsletter</h2>
            <p className='text-lg'>Get timely updates about your favourite products</p>
            <div className='flex gap-5'>
                <input type="text" placeholder='your email' className='w-5/6 outline-none border border-2 px-5 rounded'/>
                <button><BsSendFill/></button>
            </div>
        </div>
        
    </section>
  )
}

export default Newsletter