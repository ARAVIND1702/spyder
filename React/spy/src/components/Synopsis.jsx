import React from 'react'
import './animation.css'
import release from '../release_date.png'
import poster from '../Trailers/synopsis_poster.jpg'
import { useState,useRef,useEffect } from 'react';

const Synopsis = () => {
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
  return (
    <div className='w-full h-full bg-black'>

    <div ref={elementRef} className={`slide-from-left  ${shouldSlide ? 'slide-active' : ''} h-full bg-black flex flex-col min-h-[100vh]  mx-auto max-w-[90vw] 2xl:max-w-[57vw] lg:max-w-[80vw] justify-center items-center`}>
  <img src={release} className='max-h-96 md:max-w-lg mx-auto items-center pb-16 align-middle'/>
   <div className='flex flex-wrap w-full text-white'>
    <div className=' px-[1px] py-2 pb-4 md:p-6 md:basis-[40%]'>
    <img src={poster} className='max-w-full rounded-sm hover:scale-110 transition ease-in-out duration-700 h-auto align-middle'/>
    </div>
    <div className='md:basis-[60%] px-[1px] py-2  md:p-6  text-[14px] font-[600] text-white'>
    <p className='pb-4'>Miles Morales returns for the next chapter of the Oscar®-winning Spider-Verse saga, <em>Spider-Man™: Across the Spider-Verse</em>. After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most. Anyone can wear the mask – it’s how you wear it that makes you a hero.</p>
          <p className='pb-4' ><span className="text-[#d4134c] float-left w-[50%]">Directed by:</span><span className="float-right w-[50%]">Joaquim Dos Santos<br/>Kemp Powers<br/>Justin K. Thompson</span><span className="box-border block clear-both "></span></p> 
          <p className='pb-4'><span className="text-[#d4134c] float-left w-[50%]">Written by:</span><span className="float-right w-[50%]">Phil Lord<br/> Christopher Miller<br/>David Callaham</span><span className=" box-border block clear-both "></span></p> 
          <p className='pb-4'><span className="text-[#d4134c] pb-7 float-left w-[50%]">Based on the MARVEL COMICS</span><span className="box-border block clear-both "></span></p> 
          <p className='pb-4'><span className="text-[#d4134c] float-left w-[50%]">Produced by:</span><span className="float-right w-[50%]">Avi Arad<br/> Amy Pascal<br/>Christopher Miller<br/>Christina Steinberg</span><span className=" box-border block clear-both "></span></p>  
            <p className='pb-4'><span className="text-[#d4134c] float-left w-[50%]">Executive Producers:</span><span className="float-right w-[50%]">Bob Persichetti<br/>Peter Ramsey<br/>Rodney Rothman<br/>Aditya Sood<br/>Brian Michael Bendis</span><span className=" box-border block clear-both "></span></p> 
            <p className='pb-4'><span className="text-[#d4134c] float-left w-[50%]">Cast:</span><span className="float-right w-[50%]">Shameik Moore<br/>Hailee Steinfeld<br/>Brian Tyree Henry<br/>Luna Lauren Velez<br/>Jake Johnson<br/>Jason Schwartzman<br/>Issa Rae<br/>Karan Soni<br/>with Daniel Kaluuya<br/>and Oscar Isaac</span><span className=" box-border block clear-both "></span></p> 
         </div>
<div className='text-[14px] font-semibold px[1px] md:p-4'><p className='pb-4'>MARVEL and all related character names: © &amp; ™ 2023 MARVEL</p><p className='pb-4'>"Academy Award®" and/or "Oscar®" is the registered trademark and service mark of the Academy of Motion Picture Arts and Sciences.</p><p className='pb-4'>This film is rated PG by the Motion Picture Association for the following reasons: frenetic sequences of animated action violence, some language and thematic elements</p></div>
        
        
        
        
    

   </div>
  
</div>
    </div>
  )
}

export default Synopsis