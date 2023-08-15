import React from 'react'
import SendIcon from '@mui/icons-material/Send';

export const Newsletter = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[350px] w-full bg-[#c4a4f9]'>
        <h1 className='text-5xl font-bold '>
            NEWSLETTER
        </h1>
        <h2 className='text-2xl mt-2 mobile:p-3 mobile:text-center'>
            Always in touch with us , for your favourite product
        </h2>
        <div className='flex mt-[3rem] item-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden mobile:min-w-[20rem]'>
            <input type="email" placeholder='email' className='border-none pl-5 flex-[7] outline-none' />
            <button className='bg-[#4caf50] flex-1 h-full'>
                <SendIcon className='text-white'/>
            </button>
        </div>
    </div>
  )
}
