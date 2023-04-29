import React from 'react'
import Marquee from "react-fast-marquee"

function Announcement() {
  return (
    <>
      <section className='announcement p-1'>
        <Marquee className=''>
          <p className='text-center text-white'>Super Deal! Free Shipping on orders over $50</p>
        </Marquee>
      </section>

    </>
  )
}

export default Announcement