import React from 'react'

function FilterContainer() {
    return (
        <>
            <section className='px-10 my-5'>
                <div className='flex justify-between'>
                    <div className='space-x-5'>
                        <label htmlFor="Filter Product" className='font-bold text-lg text-slate-900 uppercase'>Filter Products : </label>
                        <select name="filter" id="filter-products" className='p-2 outline-none'>
                            <option value="color">--Select color--</option>
                            <option value="White">White</option>
                            <option value="Black">Black</option>
                            <option value="Yellow">Yellow</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                            <option value="Red">Red</option>
                        </select>
                        <select name="filter" id="filter-products" className='p-2 outline-none'>
                            <option value="size" >--Select size--</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="LG">LG</option>
                            <option value="XL">XL</option>
                            <option value="2XL">2XL</option>
                        </select>
                    </div>
                    <div>
                    <label htmlFor="Filter Product" className='font-bold text-lg text-slate-900 uppercase'>Sort Products : </label>
                        <select name="filter" id="filter-products" className='p-2 outline-none'>
                            <option value="color">Newest</option>
                            <option value="White">Price(asc)</option>
                            <option value="Black">Price(desc)</option>
                        </select>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FilterContainer