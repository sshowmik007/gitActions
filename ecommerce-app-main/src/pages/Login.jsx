import React from 'react'
import { MdFacebook } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { BiLockAlt  } from "react-icons/bi";

const Login = () => {
  const style= 'text-3xl text-purple-600 ';
  const ring= 'border-purple-600 rounded-full p-2 mx-1 border-2 mx-2 hover:scale-125 ease-in duration-200';

  return (
    <div className='flex flex-col items-center justify-center bg-slate-100 w-full min-h-screen flex-1 px-20 py-2 text-center mobile:px-0 mobile:py-0 mobile:flex-col '>
      <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl mobile:flex-col mobile:w-full mobile:items-center'>
          <div className='w-3/5 p-5'>
            {/* Login  */}
            <div className='text-left font-bold mobile:text-center'>
             <span className='text-purple-600'> Sadman </span> Showmik
            </div>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-purple-600'>Sign in to your account</h2>
              <div className='border-2 w-10 border-purple-600 rounded-2xl inline-block mb-2'></div>
              <div className='flex justify-center my-2 '>
               
                <a href="#" className={ring}>
                 <MdFacebook className={style}/>
                </a>

                <a href="#" className={ring}>
                 <BsLinkedin className={style}/>
                </a>

                <a href="#" className={ring}>
                 <FaGoogle className={style}/>
                </a>
              </div>
              <p className='text-gray-400 my-5'>Please use your email account</p>
            
              <div className='flex flex-col items-center mb-3'>
                <div className='bg-gray-100 w-64 p-2 rounded-2xl flex items-center'> <FaRegEnvelope className='text-gray-800 m-2'/> 
                <input type="email" name='email' placeholder='Email' className='bg-gray-100 outline-none flex-1' />
                </div>
              </div>

              <div className='flex flex-col items-center mb-3'>
                <div className='bg-gray-100 w-64 p-2 rounded-2xl flex items-center'> <BiLockAlt className='text-gray-800 m-2'/> 
                <input type="password" name='password' placeholder='Password' className='bg-gray-100 outline-none flex-1' />
                </div>

                <div className='flex w-64 my-3 justify-between'>
                  <label htmlFor="" className='flex items-center text-xs' >
                    <input type="checkbox" name='remember' className='mr-2'/> Remember me
                  </label>
                  <a href="#" className='text-xs'>Forgot password</a>
                </div>

                <a href="#" className='mt-5 border-2 border-purple-600 text-purple-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-purple-600 hover:text-white '>Log In</a>

              </div>
            </div>
          </div> 

          <div className='w-2/5 bg-purple-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 mobile:flex-col mobile:w-full mobile:rounded-none'>
            {/* <p>SIGN UP</p> */}
            <h2 className='text-3xl font-bold mb-2'>Sadman Shopping</h2>
            <div className='border-2 w-10 border-white rounded-2xl inline-block mb-2'></div>
            <p className='mb-10'>Fill up your informations</p>
            <a href="#" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-purple-600 '>Sign Up</a>
          </div>
      </div>
    </div>
  )
}

export default Login