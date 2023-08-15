import React from 'react'
import { Newsletter } from './../components/Newsletter';

import Counter from '../components/Counter';

const Cart = () => {
  return (
    <div>
        
       <div className='p-5'>
            <div className='flex justify-center text-5xl '>Cart</div>
            <div className='flex items-center justify-between mt-4 mobile:flex-col'>
                <button className='btn bg-white text-purple-400 border-purple-400 hover:bg-white'>Continue Shopping</button>
                <div className='flex underline text-lg hover:cursor-pointer mobile:flex-col mobile:my-2'>                   
                    <p>Items in Your Cart: 3</p>
                    <p className='ml-5'>Wishlist Items: 0 </p>
                </div>
                <button className='btn'>Checkout</button>
            </div>
    {/* Central DIV */}

                <div className='flex mx-5 mt-10 mobile:flex-col'>
                    <div className='flex flex-col flex-1 '>
                        {/* List of Products */}
                        <div className='flex w-full h-auto items-center mobile:flex-col'>
                            <div className='product flex self-start pl-5 mobile:pl-0 mobile:mb-10'>
                                {/* Product DESC */}
                                <img src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824" alt="Product_img" 
                                className='w-32 h-70 mr-10 rounded-lg shadow-lg hover:scale-105 ease-in duration-200 mobile:mr-3' />
                            
                                {/* description */}
                                <div className='description flex flex-col ml-5 h-auto justify-between mobile:ml-0'>
                                    <p>
                                        <b className='mr-2'>ID:</b>123456
                                    </p>
                                    <p>
                                        <b className='mr-2'>Product :</b>Blue Color Shirt
                                    </p>
                                    <p className='flex items-center justify-start'>
                                        <b className='mr-2'>Color :</b>
                                        <div className='bg-cyan-500 w-10 h-10 rounded-full border-2 p-3 cursor-pointer ml-3 hover:scale-125 ease-in duration-200 border-purple-200'>

                                        </div>
                                    </p>
                                    <p>
                                        <b className='mr-2'>Size :</b> lg
                                    </p>
                                </div>
                            </div>

                            {/* QTY & PRICE  */}
                            <div className='flex flex-col items-center justify-center flex-auto'>
                                <Counter />
                                <p className='flex items-center justify-center text-4xl mt-3'>
                                    <b>70$</b>
                                </p>
                            </div>
                        </div>

                        {/* end of First Product */}
                        <hr className='mt-7 mb-7'/>
                        {/* Second PRoduct */}

                        <div className='flex w-full h-auto items-center mobile:flex-col'>
                            <div className='product flex self-start pl-5 mobile:pl-1 mobile:mb-10'>
                                {/* Product DESC */}
                                <img src="https://cdn.shopify.com/s/files/1/0240/7285/products/KushJonesLST-ShirtinBlack09_360x.jpg?v=1642719733" 
                                className='w-32 h-70 mr-10 rounded-lg shadow-lg hover:scale-105 ease-in duration-200 mobile:mr-0' />
                            
                                {/* description */}
                                <div className='description flex flex-col ml-5 h-auto justify-between'>
                                    <p>
                                        <b className='mr-2'>ID:</b>6587456
                                    </p>
                                    <p>
                                        <b className='mr-2'>Product :</b>Gray Color Shirt
                                    </p>
                                    <p className='flex items-center justify-start'>
                                        <b className='mr-2'>Color :</b>
                                        <div className='bg-gray-500 w-10 h-10 rounded-full border-2 p-3 cursor-pointer ml-3 hover:scale-125 ease-in duration-200 border-purple-200'>

                                        </div>
                                    </p>
                                    <p>
                                        <b className='mr-2'>Size :</b> md
                                    </p>
                                </div>
                            </div>

                            {/* QTY & PRICE  */}
                            <div className='flex flex-col items-center justify-center flex-auto'>
                                <Counter />
                                <p className='flex items-center justify-center text-4xl mt-3'>
                                    <b>70$</b>
                                </p>
                            </div>
                        </div>
                        {/* end of Second product */}
                        <hr className='mt-7 mb-7'/>

                    </div>
                    {/* summery Div */}
                    <div className= 'p-5 flex-[0.3] w-auto h-[40vh] border-2 border-purple-400 rounded-md shadow-lg hover:scale-110 ease-in duration-200 '>
                        <h1 className='text-4xl font-medium'>Summery</h1>

                        <div className='flex justify-between mt-3 w-full'> 
                            <p>Subtotal</p>
                            <p>$140</p>
                        </div>
                        <div className='flex justify-between mt-3 w-full'>
                            <p>Shipping</p>
                            <p>$40</p>
                        </div>
                        <div className='flex justify-between mt-3 w-full'>
                            <p>Shipping Discount</p>
                            <p>-$20</p>
                        </div>
                        <div className='flex justify-between mt-3 w-full text-3xl font-bold'>
                            <p>Total</p>
                            <p>$140</p>
                        </div>

                    </div>

                </div>
       </div>
        <Newsletter />
      
    </div>
  )
}

export default Cart