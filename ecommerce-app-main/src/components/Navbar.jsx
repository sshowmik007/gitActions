import React,{useState} from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png' ;


const Navbar = () => {
  const[nav,setNav]= useState(false);

  const handleNav= () =>{
    setNav(!nav);
  }

  return (
    <NavLink to="/" >

<div className='flex h-24 px-4 mx-auto justify-between items-center bg-purple-600 text-white'>
    
      <NavLink to="/">
        <img src={logo} alt="Logo" className='bg-white object-cover rounded-lg  h-16 hover:scale-125 ease-in-out duration-300' />
      </NavLink>

      <ul className='hidden md:flex '>
        <li className='p-4'>
           <NavLink to="/">Home</NavLink>
        </li>
        <li className='p-4'>
            <NavLink to="/CategoryPage">Category</NavLink>
        </li>
        <li className='p-4'>
           <NavLink to="/ProductPage">Products</NavLink>
        </li>
        <li className='p-4'>
           <NavLink to="/Cart">Cart</NavLink>
        </li>
        <li className='p-4'>
           <NavLink to="/Login">Login</NavLink>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
  
      {/* Mobile menu */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-purple-600 ease-in-out duration-500 z-10' : 'fixed left-[-100%] ease-in-out duration-500 ' } >
      {/* <h1 className='w-full text-3xl font-bold text-white m-4 '>Sadman Shop</h1> */}
      <img src={logo} alt="Logo" className='bg-white object-cover rounded-lg  h-16 hover:scale-125 ease-in-out duration-300' />
        
        <ul className='pt-4 uppercase font-bold pb-10'>
        <li className='p-4 border-b border-gray-700'>
           <NavLink to="/">Home</NavLink>
        </li>
        <li className='p-4 border-b border-gray-700'>
            <NavLink to="/CategoryPage">Category</NavLink>
        </li>
        <li className='p-4 border-b border-gray-700'>
           <NavLink to="/ProductPage">Products</NavLink>
        </li>
        <li className='p-4 border-b border-gray-700'>
           <NavLink to="/Cart">Cart</NavLink>
        </li>
        <li className='p-4 border-b border-gray-700'>
           <NavLink to="/Login">Login</NavLink>
        </li>
  
        </ul>
      </div>
    </div>


    </NavLink>

    
  )
}

export default Navbar