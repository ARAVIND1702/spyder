import React,{useState} from 'react'
import { useRef } from 'react';
import {FaLinkedin} from 'react-icons/fa'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import left from './sp_logo.svg'
import right from './sony.svg'
import { IconBase } from 'react-icons/lib';
const Footer = () => {
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
    <div className='text-white fixed bg-black bottom-0 flex flex-col justify-center z-[999] items-center  py-1 w-full max-w-full   px-4'>
        <h1 className='flex text-center font-light font-mono text-[12px]'>DEVELOPED BY <a className='cursor-pointer flex' href='https://www.linkedin.com/in/rm-aravind' target='_blank'><span className='text-amber-300' >&#9889; ARAVIND RM</span>&nbsp;~&nbsp;<FaLinkedin size={16} className='mt-[1px] text-sky-500' /></a></h1>
        <div className="text-center font-light font-mono text-[12px]">© 2023 SONY PICTURES DIGITAL PRODUCTIONS INC. ALL RIGHTS RESERVED. ©2023 CTMG.  © &amp; ™ 2023 MARVEL. </div>
        </div>
        </>
  )
}

export default Footer
