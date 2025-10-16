import React from 'react';
import Logo from './assets/Logo100.png';
import { useRef } from 'react';

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; 

gsap.registerPlugin(ScrollToPlugin);

export default function Nav() {

  const containerRef = useRef(null);

      useGSAP(() => {
        // Your GSAP animations and ScrollTo calls go here
        // For example, to scroll to an element with ID "targetSection"
        const fLink = document.querySelector('#faqLink');
        fLink.addEventListener('click', () => {
          console.log("FAQ link clicked")
          gsap.to(window, { duration: 1, scrollTo: "#faq", ease: "power2.inOut" }); 
        });

        const pLink = document.querySelector('#pricingLink');
        pLink.addEventListener('click', () => {
          console.log("Pricing link clicked")
          gsap.to(window, { duration: 1, scrollTo: "#pricing", ease: "power2.inOut" }); 
        })
        

      }, { scope: containerRef }); // Optional: scope for selector text

  return (
    <div className="flex justify-between items-center max-w-[1190px] h-[56px] mx-auto my-8 px-6 sm:px-10 md:px-6 pt-3 sm:pt-0">
      {/* Left side */}
      <div className="flex items-center gap-x-10">
        <a href="">
          <img src={Logo} alt="Beyond100 Logo" className="h-10 cursor-pointer"/>
        </a>

        {/* Nav links (desktop only) */}
        <div className="hidden md:flex gap-x-6 font-manrope text-[1rem] opacity-65">
          <a href="./index.html" className='cursor-pointer'>Home</a>
          <a href="./portfolio.html" className='cursor-pointer'>Portfolio</a>
          <a id='faqLink' className='cursor-pointer'>FAQ</a>
          <a id='pricingLink' className='cursor-pointer'>Pricing</a>
        </div>
      </div>

      {/* CTA button */}
      <div className="px-5 py-2 bg-[#813FF4] text-white font-semibold rounded-xl text-[1.125rem] cursor-pointer">
        <a href="https://calendly.com/thestanedgar/15mins" target="_blank" rel="noopener noreferrer">
          Book a call
        </a>
      </div>
    </div>
  );
}
