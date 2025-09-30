import React from 'react';
import Logo from './assets/Logo100.png';

export default function Nav() {
  return (
    <div className="flex justify-between w-[1190px] h-[56px] mx-auto px-6">
      <div className="flex items-center gap-x-10">
        <img src={Logo} alt="Beyond100 Logo" className="h-10" />
        <div className="flex gap-x-6 font-manrope">
          <a href="" className='font-manrope'>Home</a>
          <a href="">Portfolio</a>
          <a href="">FAQ</a>
          <a href="">Pricing</a>
        </div>
      </div>
      
      <div>
        <div className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Book a call
        </div>
      </div>
    </div>
  );
}
