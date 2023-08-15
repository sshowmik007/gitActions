import React from 'react'
import Announce from '../components/Announce'
import Counter from '../components/Counter'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'

const ProductPage = () => {
  return (
    <div>

        <div className=' flex justify-center mobile:flex-col'>
            <div className='flex flex-1 items-center justify-center my-10 '>
                <img src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812" alt="Product-image" className='w-50 h-70 rounded-lg shadow-lg hover:scale-105 ease-in duration-200'/>
            </div> 

            <div className='flex-[1.3] flex items-start justify-items-start flex-col mt-10 mobile:mx-3 mobile:my-2 mobile:items-center'>
                <h1 className='title text-4xl mobile:text-center mobile:text-3xl'>Creamy Hoodie Original</h1>
                <p className='pr-16 text-justify whitespace-normal mt-5 mobile:pr-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non velit tenetur saepe sapiente alias fugiat eligendi, distinctio quibusdam quisquam perspiciatis magnam voluptates optio error? Corrupti ipsam maxime voluptates eaque non?
                </p>
                <p className='mt-7 text-3xl'>Price: <b>$70</b> </p>
              
               {/* Color Variants */}
                <div className='flex text-2xl mt-7'>
                    Colors 
                    <div className='bg-red-500 w-10 h-10 rounded-full border-2 p-3 cursor-pointer mx-3 hover:scale-125 ease-in duration-200 border-purple-200'></div>
                    <div className='bg-green-500 w-10 h-10 rounded-full border-2 p-3 cursor-pointer mx-3 hover:scale-125 ease-in duration-200 border-purple-200'></div>
                    <div className='bg-cyan-500 w-10 h-10 rounded-full border-2 p-3 cursor-pointer mx-3 hover:scale-125 ease-in duration-200 border-purple-200'></div>
                </div>

                <div className='mt-7 text-2xl'>
                    Size
                    <select  name="" id="" className='ml-5 border-2 rounded-lg p-2 border-cyan-400'>
                        <option selected disabled value="">Select</option>
                        <option value="">Small</option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                    </select>
                </div>

                <div className='mt-5'> 
                    <Counter />
                </div>
                <button className='btn mt-5'>Add to Cart</button>

            </div>
        </div>
    </div>
  )
}

export default ProductPage