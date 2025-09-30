import React from 'react';
import icons from "./icons.js";

export default function Hero() {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-[14rem] mb-[1rem] gap-[10px] pl-[7px] pr-[10px] py-[4px] border-2 border-[#0000001A] rounded-full bg-[#F0F2F9] flex justify-center shadow-[0px_61px_24px_rgba(0,0,0,0.01),0px_34px_21px_rgba(0,0,0,0.03),0px_15px_15px_rgba(0,0,0,0.05),0px_4px_8px_rgba(0,0,0,0.06)]'>
               <img src={icons.alertCircle} alt="circle" />
               <p className='text-[0.9rem] text-[#54555D] font-medium'>Available for new projects</p>
            </div>

            <div className='flex flex-col font-manrope mb-[2rem]'>
               <h1 className='text-[4.50rem] tracking-[-0.20rem] flex flex-col text-center  leading-[1.1] font-bold'>
              <span>Your Design Team,</span>
              <span>Built for SaaS startups</span>
             </h1>
        
             <p className=' flex flex-col text-center text-[1.125rem] text-[#000000]'>
              <span>We craft conversion-focused websites that turns traffic</span> 
              <span>into paying users.</span>
             </p>
            </div>
            
            <div className='flex gap-[1rem]'>
              <div className='px-5 py-2 bg-[#813FF4] text-white font-semibold rounded-xl text-[1.1rem] cursor-pointer'>Book a call</div>
              <div className='px-5 py-2 bg-[#FFFFFF] text-black rounded-xl text-[1.1rem] cursor-pointer"'>View projects</div>
            </div>

            <div>
              <div>Conversion-driven sites</div>
              <div>Fast delivery</div>
              <div>Design + Development</div>
            </div>
        
        </div>
       
    );  
};