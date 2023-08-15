import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import { Newsletter } from '../components/Newsletter';
import Products from './../components/Products';
import { Footer } from './../components/Footer';

const CategoryPage = () => {
  return (
    <div>

        {/* Categories */}
        <div className='flex flex-col '>
          <h1 className=' bg-slate-200 p-5 text-center text-3xl font-bold shadow-lg '>Men's Cloth</h1>
          <div className='flex items-center justify-between mt-3 '>
            <div className='flex pl-2 mobile:flex-col'>
              <p className='text-xl font-black'>Filter By </p>
              <select name="" id="" className='ml-3 border-2 border-gray-200'>
                <option selected disabled value="">Size</option>
                <option>Small</option>
                <option>Medium </option>
                <option>Large</option>
              </select>
              <select name="" id=""  className='ml-3 border-2 border-blue-200'>
                <option selected disabled value="">Color</option>
                <option>Red</option>
                <option>Blue </option>
                <option>Yellow</option>
              </select>
            </div>
            {/* SORTING */}
            <div className='flex pr-10 '>
              <p className='text-xl font-black'>Sort By</p>
              <select name="" id="" className='ml-3 border-2 border-orange-200'>
                <option value="">Newest (First)</option>
                <option value="">Oldest (First)</option>
                <option value="">Price (ASC)</option>
                <option value="">Price (DEC)</option>
              </select>
            </div>
          </div>
        </div>


        <Products />
        <Newsletter />
        
    </div>
  )
}

export default CategoryPage