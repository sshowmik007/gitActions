import React from 'react'

const Counter = () => {
  return (
    <div>
        <div className='flex items-center justify-center text-2xl'>
            Quantity
            <div className='ml-5 shadow-md flex'>
                <div className='bg-purple-500 text-white flex w-8 items-center justify-center cursor-pointer rounded-l-md'> - </div>
                <div className='w-8 flex items-center justify-center border-2 border-purple-500'> 1 </div>
                <div className='bg-purple-500 text-white flex w-8 items-center justify-center cursor-pointer rounded-r-md'> + </div>
            </div>
        </div>
    </div>
  )
}

export default Counter