import React from 'react'

const Category = ({item}) => {
  return (   
 <div className=' flex-1 m-2 shadow-lg rounded-md overflow-hidden relative '>
 
        {/* Flex-1 means each of the phootos fgonna be similar Size */}
        {/* Absolute means each of the photos h2 tags gona be center Allign */}
            <img src={item.src} alt="category_images" className='w-full ' />
            <div  className='flex absolute w-full h-full left-0 top-0 items-center justify-center flex-col '>
                <h2 className='text-white font-medium text-3xl mobile:text-sm'> {item.title} </h2>
               <button className='btn m-3 mobile:m-0'>View More</button>
            </div>
        </div>

    
  )
}

export default Category