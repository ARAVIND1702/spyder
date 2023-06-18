import React,{useState} from 'react'
import { useRef } from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import left from './sp_logo.svg'
const Nav = () => {
const titleRef = useRef();
const [nav,setNav] =useState(false)

 const handleNav=()=>{
      setNav(!nav);
 }

function handleClick() {
  titleRef.current.scrollIntoView({ behavior: "smooth" });
}

  return (
    <>
    <div className='text-white fixed bg-black top-0 flex justify-between z-[9999] items-center h-24 w-full max-w-full   px-4'>
        <img src={left} className=''/>
        <ul className='hidden md:flex  '>
          <li className='p-4 font-light hover:text-[#00df98] transition duration-500 ease-out hover:ease-in cursor-pointer'>Home</li>
          <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'>About</li>
        <a href='#newsletter' className='scroll-smooth'>  <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'>Contact</li></a>
          <li className='p-4 font-semibold whitespace-nowrap'><button className='rounded-md border border-[#00df9a] hover:bg-[#00df9a] hover:text-gray-900 p-4 py-3 mt-[-14px]  transition duration-500 ease-out hover:ease-in'>Get Started</button></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          { !nav  ? <AiOutlineMenu className='' size={20} />: <AiOutlineClose size={20}/> }
        </div>
        <div className= {!nav ? 'fixed top-0 h-full w-[60%] left-[-100%] ease-in-out duration-700'  : 'fixed left-0 top-0 w-[60%] z-10 h-full border-r border-r-[#06555b] backdrop-blur-sm bg-gradient-to-l from-[#00956630] to-[#00df9800] ease-in-out duration-700 '}>
        <ul className='pt-20' >
          <li className='p-4 font-light hover:text-[#00df98] transition duration-500 ease-out hover:ease-in cursor-pointer'>Home</li>
          <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'>About</li>
          <li className='p-4 font-light hover:text-[#00df9a] transition duration-500 ease-out hover:ease-in cursor-pointer'>Contact</li>
          <li className='p-4 font-semibold whitespace-nowrap'><button className='rounded-md border border-[#00df9a] hover:bg-[#00df98f3] hover:text-gray-900 p-4 py-3 mt-[-14px]  transition duration-500 ease-out hover:ease-in'>Get Started</button></li>
        </ul>
        </div>
        </div>
        {/* <div  ref={titleRef} className='w-60 h-60 absolute bg-slate-50 mx-auto'></div> */}
        
        </>
  )
}

export default Nav
