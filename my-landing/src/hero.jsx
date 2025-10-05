import React from 'react';
import icons from "./icons.js";

export default function Hero() {
    return (
        <div className='flex flex-col items-center mt-[6.25rem] mb-[3rem] mx-auto'>
            <div className='w-[14rem] mb-[1rem] gap-[10px] pr-[0.375rem] py-[4px] border-2 border-[#0000001A] rounded-full bg-[#F0F2F9] flex justify-center shadow-[0px_61px_24px_rgba(0,0,0,0.01),0px_34px_21px_rgba(0,0,0,0.03),0px_15px_15px_rgba(0,0,0,0.05),0px_4px_8px_rgba(0,0,0,0.06)]'>
               <img src={icons.alertCircle} alt="circle" />
               <p className='text-[0.875rem] text-[#54555D] font-medium font-manrope'>Available for new projects</p>
            </div>

            <div className='flex flex-col font-manrope mb-[2rem]'>
               <h1 className='text-[4.50rem] tracking-[-0.20rem] flex flex-col text-center  leading-[1.1] font-bold'>
              <span>Your Design Team,</span>
              <span>Built for <span className='bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text text-transparent'>SaaS</span> startups</span>
             </h1>
        
             <p className=' flex flex-col text-center text-[1.125rem] text-[#000000]'>
              <span>We craft conversion-focused websites that turns traffic</span> 
              <span>into paying users.</span>
             </p>
            </div>
            
            <div className='flex gap-[1rem] mb-[7rem] font-manrope'>
              <div className='px-5 py-2 bg-[#813FF4] text-white font-semibold rounded-xl text-[1.125rem] cursor-pointer'><a href="https://calendly.com/thestanedgar/15mins" target='_blank'>Book a call</a></div>
              <div className='px-5 py-2 bg-[#FFFFFF] text-black rounded-xl text-[1.125rem] cursor-pointer"'>View projects</div>
            </div>

            <div className='font-manrope flex gap-6'>
              <div className='flex justify-center text-sm text-[#868892] font-medium items-center px-4 py-[0.4rem] gap-[10px] bg-white border border-[#D7D7DB] rounded-lg'>Conversion-driven sites</div>
              <div className='flex justify-center text-sm text-[#868892] font-medium items-center px-4 py-[0.4rem] gap-[10px] bg-white border border-[#D7D7DB] rounded-lg'>Fast delivery</div>
              <div className='flex justify-center text-sm text-[#868892] font-medium items-center px-4 py-[0.4rem] gap-[10px] bg-white border border-[#D7D7DB] rounded-lg'>Design + Development</div>
            </div>
        
        </div>
       
    );  
};