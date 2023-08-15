import React from 'react'
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div>

        <div className='flex flex-col items-center justify-center min-h-screen w-full px-20 py-2 text-center bg-slate-100'>
            <div className='px-24 py-36 border-8 border-red-200 rounded-lg shadow-lg'>
            <div className='lg:text-9xl lg:text-purple-800 md:text-5xl md:text-red-500 sm:text-3xl sm:text-purple-800 font-black  m-4 '>Error 404</div>
            <div className='font-medium lg:text-4xl md:text-2xl'>Pages Not Found</div>
          <NavLink to="/">
          <button className='btn mt-5'>Return to Home Page</button>
          </NavLink>
          
           
            </div>
              
        </div>
    </div>
  )
}

export default Error