import './App.css';
import React,{useState,useEffect} from 'react'
import { Link } from 'react-scroll';

import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import Synopsis from './components/Synopsis';
import Videos from './components/Videos';
import Hero from './components/hero'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import left from './components/sp_logo.svg'
import right from './components/sony.svg'

function App() {
  
  const [nav,setNav] =useState(false)

  useEffect(() => {
    if (nav) {
      // Disable scrolling when nav is true
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling when nav is false
      document.body.style.overflow = 'auto';
    }
  }, [nav]);

 const handleNav=()=>{
      if(window.innerWidth<=768){
        setNav(false);
      }
      setNav(!nav);
 }
 const handleNavLink=()=>{
  if(window.innerWidth<=768){
    setNav(false);
  }

}
  return (
    <div className=" scroll-smooth">
      {/* start of nav */}
      <div className='text-white fixed bg-black top-0 flex justify-between z-[999] items-center pt-3 py-2 w-full max-w-full   px-4'>
        <img src={left} className='h-[12px] md:h-[15px]'/>
        <img src={right} className='h-[12px] md:h-[15px]'/>
        </div>
        {/* mobile start  */}
        <div onClick={handleNav} className='fixed top-10 z-[9999] right-0  cursor-pointer pr-4 ease-in-out duration-500'>
        
          { !nav  ? <AiOutlineMenu color='white' className='ease-in-out duration-700'  size={28} />: <AiOutlineClose color='white' className='ease-in-out duration-700' size={28}/> }
        </div>
        <div className= {!nav ? 'fixed top-0 h-full bg-[#080f65] w-[60%] right-[-100%] ease-in-out duration-700'  : 'fixed right-0 top-0 md:w-[280px] w-full z-[999]  h-full bg-[#080F65] ease-in-out duration-700 '}>
        <ul className='pt-28' >
<Link to="hero" onClick={handleNavLink} smooth={true} duration={700}><li className='py-[12px] text-white  text-sm  font-[700]  text-center  hover:bg-[#EE1D23]   hover:ease-in cursor-pointer'>HOME</li></Link>
<Link to="videos"   onClick={handleNavLink} smooth={true} duration={700}><li className='py-[12px] text-white text-sm   font-[700] text-center  hover:bg-[#EE1D23]  hover:ease-in cursor-pointer'>VIDEOS</li></Link>
<Link to="synopsis" onClick={handleNavLink} smooth={true} duration={700}><li className='py-[12px] text-white text-sm font-[700] text-center  hover:bg-[#EE1D23]  hover:ease-in cursor-pointer'>SYNOPSIS</li></Link>
<Link to="gallery" onClick={handleNavLink} smooth={true} duration={700}><li className='py-[12px] text-white text-sm  font-[700] text-center hover:bg-[#EE1D23] cursor-pointer'>GALLERY</li></Link>

        </ul>
        </div>
      {/* end of nav */}
      <div id="hero">
      <Hero />
    </div>
    
    <div id="videos">
      <Videos />
    </div>
    
    <div id="synopsis">
      <Synopsis />
    </div>
    
    <div id="gallery">
      <Gallery />
    </div>
      <Footer/>
    </div>
  );
}

export default App;
