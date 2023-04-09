import React from 'react'
import Marquee from "react-fast-marquee"

function Announcement() {
  return (
    <>
      <section className='announcement p-1'>
        <Marquee className='space-x-20' VSPACE='20'>
          <p className='text-center text-sm'>Super Deal! Free Shipping on orders over $50</p>
          {/* <p className='text-center text-sm'>Super Deal! Free Shipping on orders over $50</p>
          <p className='text-center text-sm'>Super Deal! Free Shipping on orders over $50</p>
          <p className='text-center text-sm'>Super Deal! Free Shipping on orders over $50</p> */}
        </Marquee>
      </section>

    </>
  )
}

export default Announcement