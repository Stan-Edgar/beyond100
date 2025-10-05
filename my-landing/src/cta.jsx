import react from 'react';
import icons from "./icons.js";

export default function Cta() {
    return (
        
        <div className='flex flex-col items-center mt-24 gap-6'>
            <h2 className='text-[3.375rem] tracking-[-0.20rem] flex flex-col text-center  leading-[1.1] font-bold'>Ready to grow <br />  your SaaS?</h2>
        <div className='flex px-5 py-2 gap-2.5 bg-[#813FF4] h-[2.6875rem] text-white font-semibold rounded-xl text-[1.125rem] cursor-pointer'><a href="https://calendly.com/thestanedgar/15mins" target='_blank'>Book a free discovery call </a><img src={icons.discover} alt="top right arrow" width='14' height='14' /></div>
        </div>
        
    );
}