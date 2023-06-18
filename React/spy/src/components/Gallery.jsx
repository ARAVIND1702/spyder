import React from 'react';
import './animation.css'
import { useState,useRef,useEffect } from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import bg from '../Trailers/spiderman3x.png'
const Gallery = () => {
  const elementRef = useRef(null);
  const [shouldSlide, setShouldSlide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (elementPosition.top < windowHeight) {
          setShouldSlide(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const slides = [
    {
      url: 'https://www.acrossthespiderverse.movie/images/gallery/img3.jpg'
    },
    {
      url: 'https://www.acrossthespiderverse.movie/images/gallery/img2.jpg'
    },
    {
      url: 'https://www.acrossthespiderverse.movie/images/gallery/img1.jpg'
    },
    {
      url: 'https://www.acrossthespiderverse.movie/images/gallery/img5.jpg'
    },
    {
      url: 'https://www.acrossthespiderverse.movie/images/gallery/img6.jpg'
    },
    {
      url: 'https://www.acrossthespiderverse.movie/images/gallery/img7.jpg'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide=()=>{
    const isFirstSlide = currentIndex ===0;
    const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1;
    setCurrentIndex(newIndex);
}
  const nextSlide=()=>{
    const isLastSlide = currentIndex === slides.length-1;
    const newIndex = isLastSlide? 0 : currentIndex+1;
    setCurrentIndex(newIndex)
}
  return (
    <div style={{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),url(${bg})`}} className='w-full h-full bg-cover bg-center bg-black '>

    <div className={`md:max-w-[57vw] min-h-[100vh] w-full relative px-4 py-16 m-auto`}>
    <h1 className='font-bold font-sans text-center text-[26px] py-10 text-[#d4134c]'>GALLERY</h1>
    <div className='hover:scale-105 transition ease-in-out duration-700 max-w-full h-[300px] md:h-[480px] w-full m-auto py-16  relative group'>
    
    <div 
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className='w-full h-full bg-center bg-cover rounded-lg duration-500'
      ></div>
    {/* Left Arrow */}
    <div className=' group-hover:bg-black/50 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 transition duration-700 ease-in-out text-[#d4134c] cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className=' group-hover:bg-black/50 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 transition duration-700 ease-in-out text-[#d4134c] cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
   
  </div>
    </div>
      </div>
  );
};

export default Gallery;
