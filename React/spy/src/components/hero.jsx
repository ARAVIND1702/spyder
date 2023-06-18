import React from 'react'
import bg from '../bgVideo.mp4'
import release from '../release_date.png'
import './arrow.css'
import '../App'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='w-full relative mr-auto'>
        <div className='top-8    h-screen '>
          {/* <video className=' relative min-w-full h-full bg-cover object-cover md:top-[32%]' autoPlay muted playsInline loop>
            <source src={bg} type='video/mp4' />
          </video> */}
          <video className='absolute top-0 left-0 w-full h-full object-cover' width="100%" height="100%" autoPlay muted playsInline loop>
        <source src={bg} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
        <div className='max-w-full items-end flex  justify-center pt-96 2xl:pt-[30%]  relative'>
         <div className='text-center justify-center items-center'> 
          <img src={release} className='max-h-96 md:max-w-lg mx-auto items-center align-middle'/>
        <a href='https://in.bookmyshow.com/buytickets/spider-man-across-the-spider-verse-coimbatore/movie-coim-ET00347275-MT/20230618' target='_blank'>  <button className='text-[15px] font-semibold font-mono  shadow-inner border border-[#EE1D23] text-white rounded-3xl px-10 py-[5px] bg-[#0209a1] '>BOOK NOW</button></a>
        <div className='py-8'>
    <Link to="videos" smooth={true} duration={700}>
    <div id="mouse-scroll" className='flex cursor-pointer justify-center'>
    {/* <div class="mouse">
      <div class="mouse-in"></div>
    </div> */}
        <div>
      <span class="down-arrow-1"></span>
      <span class="down-arrow-2"></span>
      <span class="down-arrow-3"></span>
        </div>
      </div>
    </Link>
</div>         
         </div>
        </div>
        </div>
    </div>
  )
}

export default Hero