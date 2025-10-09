import React from 'react';
import icons from "./icons.js";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText"

const benefit = 'flex flex-nowrap justify-center text-sm text-[#868892] font-medium items-center px-4 py-[0.4rem] gap-[10px] bg-white border border-[#D7D7DB] rounded-lg';

export default function Hero() {

  useGSAP(() => {

    let split = SplitText.create('#Header', { type: "lines", mask: "lines"} );

    gsap.from(split.lines, {
      duration: 1,
      x: 0,
      y: 100,
      autoAlpha: 0,
      filter: "blur(4px)"
    })

    gsap.from("#para", {
      duration: 1,
      y: 40,
      autoAlpha: 0,
      stagger: 0.05
    })

   
  }, [])

    return (
        <div className='flex flex-col items-center mt-[6.25rem] mb-[3rem] mx-auto px-6'>
            <div id='' className='flex justify-center items-center w-[12.45rem] sm:w-[14rem] mb-[1rem] gap-[0.5rem] pr-[0.275rem] sm:pr-[0.375rem] py-[2.5px] sm:py-[4px] border-2 border-[#0000001A] rounded-full bg-[#F0F2F9] shadow-[0px_61px_24px_rgba(0,0,0,0.01),0px_34px_21px_rgba(0,0,0,0.03),0px_15px_15px_rgba(0,0,0,0.05),0px_4px_8px_rgba(0,0,0,0.06)]'>
               <img src={icons.alertCircle} alt="circle" className='w-[1.25rem] sm:w-[1.4rem] h-[1.25rem] sm:h-[1.4rem]' />
               <p className='text-[0.775rem] sm:text-[0.875rem] text-[#54555D] font-medium font-manrope'>Available for new projects</p>
            </div>

            <div className='flex flex-col font-manrope mb-[2rem]'>
               <h1 id='Header' className='text-[2.75rem] sm:text-[4.50rem] tracking-[-0.20rem] flex flex-col text-center  leading-[1.265] font-bold'>
              <span >Your Design Team,</span>
              <span>Built for <span className='bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text text-transparent'>SaaS</span> startups</span>
             </h1>
        
             <p id='para' className=' flex flex-col text-center text-[1rem] sm:text-[1.125rem] text-[#000000]'>
              <span>We craft conversion-focused websites that turns traffic</span> 
              <span>into paying users.</span>
             </p>
            </div>
            
            <div className='flex gap-[1rem] mb-[4.75rem] sm:mb-[6.5rem] font-manrope'>
              <div className='px-5 py-2 bg-[#813FF4] text-white font-semibold rounded-xl text-[1.125rem] cursor-pointer'><a href="https://calendly.com/thestanedgar/15mins" target='_blank'>Book a call</a></div>
              <div className='px-5 py-2 bg-[#FFFFFF] text-black rounded-xl text-[1.125rem] cursor-pointer"'><a href="./portfolio.html">View projects</a></div>
            </div>

            <div className='font-manrope flex flex-wrap justify-center gap-[0.5rem] sm:gap-6'>
              <div className={benefit}>Conversion-driven sites</div>
              <div className={benefit}>Fast delivery</div>
              <div className={benefit}>Design + Development</div>
            </div>
        
        </div>
       
    ); 
};