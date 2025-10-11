// src/Slider.jsx
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const slides = Array.from({ length: 18 }, (_, i) => `/slides/slide${i + 1}.png`);

export default function Slider({ isPortfolio }) {

  return (
    <div className={`w-full flex overflow-hidden mt-28`}>
    <div className={`flex ${isPortfolio ? 'flex-col' : 'flex-row'} items-center gap-[40px]`}>
    {slides.map((src, i) => (
      <img
        key={i}
        src={src}
        alt={`slide-${i + 1}`}
        className="slide flex-shrink-0 w-[400px] sm:w-[800px] h-[300px] sm:h-[600px] object-fit rounded-2xl"
      />
    ))}
  </div>
</div>

  );
}
