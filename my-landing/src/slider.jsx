// src/Slider.jsx
import React from "react";

const slides = Array.from({ length: 19 }, (_, i) => `/slides/slide${i + 1}.png`);

export default function Slider() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        id="slider"
        className="flex gap-[40px] overflow-hidden w-[80%] max-w-6xl"
      >
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i + 1}`}
            className="flex-shrink-0 w-[800px] h-[600px] object-cover rounded-2xl shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}
