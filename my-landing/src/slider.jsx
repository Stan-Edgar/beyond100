import React, { useEffect, useRef, useState } from "react";

const slides = Array.from({ length: 18 }, (_, i) => `/slides/slide${i + 1}.png`);

export default function Slider({ isPortfolio = false, speed = 200 }) {
  const trackRef = useRef(null);
  const setRef = useRef(null);
  const [setWidth, setSetWidth] = useState(0);
  const offsetRef = useRef(0);
  const rafRef = useRef(null);
  const lastTime = useRef(null);

  // Measure total width of slides after images load
  useEffect(() => {
    const measure = () => {
      const el = setRef.current;
      if (!el) return;
      setSetWidth(el.scrollWidth);
    };

    // Measure after all images load
    const imgs = setRef.current?.querySelectorAll("img") || [];
    let loaded = 0;
    imgs.forEach((img) =>
      img.addEventListener("load", () => {
        loaded++;
        if (loaded === imgs.length) measure();
      })
    );

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Continuous animation — but absolutely stop if isPortfolio
  useEffect(() => {
    // If portfolio: ensure any RAF is canceled, reset offset and transform
    if (isPortfolio) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTime.current = null;
      offsetRef.current = 0;
      if (trackRef.current) trackRef.current.style.transform = "none";
      return;
    }

    // Otherwise run the animation
    const step = (time) => {
      if (!lastTime.current) lastTime.current = time;
      const dt = (time - lastTime.current) / 1000;
      lastTime.current = time;

      const move = speed * dt;
      offsetRef.current -= move;

      if (Math.abs(offsetRef.current) >= setWidth) {
        offsetRef.current += setWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [setWidth, isPortfolio, speed]);

  return (
    // Center wrapper when portfolio; keep overflow-hidden to clip
    <div className={`w-full flex overflow-hidden mt-20 ${isPortfolio ? "justify-center items-center" : ""}`}>
      <div
        ref={trackRef}
        className={`flex ${isPortfolio ? "flex-col gap-10 items-center" : "flex-row will-change-transform"} select-none`}
        // When portfolio, disable transform entirely; otherwise move on X
        style={{ transform: isPortfolio ? "none" : `translateX(${offsetRef.current}px)` }}
      >
        {/* Original set */}
        <div ref={setRef} className={`flex ${isPortfolio ? "flex-col gap-10 items-center" : "gap-10"}`}>
          {slides.map((src, i) => (
            <img
              key={`a-${i}`}
              src={src}
              alt={`slide-${i}`}
              className="w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] rounded-xl flex-shrink-0 object-cover"
              draggable={false}
            />
          ))}
        </div>

        {/* Duplicate set only needed for horizontal looping; omit when portfolio */}
        {!isPortfolio && (
          <div className="flex gap-10" aria-hidden="true">
            {slides.map((src, i) => (
              <img
                key={`b-${i}`}
                src={src}
                alt={`slide-dup-${i}`}
                className="w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] rounded-xl flex-shrink-0 object-cover"
                draggable={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
