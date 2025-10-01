import React from 'react';
import Logo from './assets/Logo100.png';

export default function Nav() {
  return (
    <div className="flex justify-between w-[1190px] h-[56px] self-center my-[2rem] mx-auto">
      <div className="flex items-center gap-x-10">
        <a href=""><img src={Logo} alt="Beyond100 Logo" className="h-10 cursor-pointer" /></a>
        <div className="flex gap-x-6 font-manrope text-[1rem] opacity-65">
          <a href="">Home</a>
          <a href="">Portfolio</a>
          <a href="">FAQ</a>
          <a href="">Pricing</a>
        </div>
      </div>
      
      <div className="px-5 py-2 bg-[#813FF4] h-[2.6875rem] text-white font-semibold rounded-xl text-[1.125rem] cursor-pointer">
          Book a call
        </div>

    </div>
  );
}
