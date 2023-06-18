import React,{useState} from 'react'
import { useRef } from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import left from './sp_logo.svg'
import right from './sony.svg'
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
    <div className='text-white fixed bg-black top-0 flex justify-between z-[999] items-center pt-3 py-2 w-full max-w-full   px-4'>
        <img src={left} className='h-[12px] md:h-[15px]'/>
        <img src={right} className='h-[12px] md:h-[15px]'/>
        </div>
        {/* mobile start  */}
        <div onClick={handleNav} className='fixed top-10 z-[9999] right-0  cursor-pointer pr-4 ease-in-out duration-500'>
        
          { !nav  ? <AiOutlineMenu color='white' className='ease-in-out duration-700'  size={28} />: <AiOutlineClose color='white' className='ease-in-out duration-700' size={28}/> }
        </div>
        <div className= {!nav ? 'fixed top-0 h-full bg-[#080f65] w-[60%] right-[-100%] ease-in-out duration-700'  : 'fixed right-0 top-0 md:w-[280px] w-full  z-[999]  h-full bg-[#080F65] ease-in-out duration-700 '}>
        <ul className='pt-28' >
          <li className='py-[12px] text-white  text-sm  font-[700]  text-center  hover:bg-[#EE1D23]   hover:ease-in cursor-pointer'>HOME</li>
          <li className='py-[12px] text-white text-sm   font-[700] text-center  hover:bg-[#EE1D23]  hover:ease-in cursor-pointer'>VIDEOS</li>
          <li className='py-[12px] text-white text-sm font-[700] text-center  hover:bg-[#EE1D23]  hover:ease-in cursor-pointer'>SYNOPSIS</li>
          <li className='py-[12px] text-white text-sm  font-[700] text-center hover:bg-[#EE1D23] whitespace-nowrap'>GALLERY</li>
        </ul>
        </div>
        {/* mobile end */}
        {/* <div  ref={titleRef} className='w-60 h-60 absolute bg-slate-50 mx-auto'></div> */}
        
        </>
  )
}

export default Nav
