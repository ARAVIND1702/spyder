import  React, { useRef, useEffect, useState }  from 'react'
import Trailer1 from '../Trailers/trailer1.mp4'
import Trailer2 from '../Trailers/trailer2.mp4'
import Poster1 from '../Trailers/video_poster1.jpg'
import Poster2 from '../Trailers/video_poster2.jpg'
import './animation.css'
const Videos = () =>  {
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
    <div className='max-w-full h-full bg-black flex flex-col justify-center items-center'>
  <h1 className='font-bold font-sans text-center text-[26px] py-10 text-[#d4134c]'>VIDEOS</h1>
  <div ref={elementRef} class={`slide-from-left ${shouldSlide ? 'slide-active' : ''}`} className={`min-h-[inherit] px-6 md:px-8 lg:max-w-[80vw] pb-28  xl:max-w-[57vw] h-full `}>
    <div className=' flex border-[1px]   border-[#272626]'>
      <video className='' width='100%' height='100%' poster={Poster1} controls>
        <source src={Trailer1} type='video/mp4' />
        Your browser does not support HTML5 video.
      </video>
    </div>
  </div>
  <div ref={elementRef} class={`slide-from-right ${shouldSlide ? 'slide-active' : ''}` } className='lg:max-w-[80vw] pb-28 px-6 md:px-8 xl:max-w-[57vw] h-full '>
    <div className=' flex border-[1px]   border-[#272626]'>
      <video className='' width='100%' height='100%' poster={Poster2} controls>
        <source src={Trailer2} type='video/mp4' />
        Your browser does not support HTML5 video.
      </video>
    </div>
  </div>
</div>

  )
}

export default Videos