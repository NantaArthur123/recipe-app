// Note:
// - Add PC dragable
// - Optimize it
// - Clean and add better comments

"use client";
import React, { useState } from "react";

interface CarouselItems {
  images: string[];
  desc: string[];
}

export default function Carousel({ images }: CarouselItems) {
  const [Current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || touchStart === null) return;
    const current = e.touches[0].clientX;
    setDragOffset(current - touchStart);
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    if (touchStart === null || touchEnd === null) return;

    const distance = dragOffset;

    if (distance > 50) {
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else if (distance < -50) {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }

    setTouchStart(null);
    setTouchEnd(null);
    setDragOffset(0);
  };

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(calc(${-Current * 100}% + ${dragOffset}px))`,
            transition: isDragging ? "none" : "transform 0.5s ease",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="min-w-full object-cover flex-shrink-0 h-64 md:h-96"
              alt={`Slide ${index}`}
            />
          ))}
        </div>
        <button
          onClick={() =>
            setCurrent(Current === 0 ? images.length - 1 : Current - 1)
          }
          className="absolute h-full top-1/2 -translate-y-1/2 p-2 hover:bg-black/50 pr-5 md:pr-16"
        >
          &#10094;
        </button>
        <button
          onClick={() =>
            setCurrent(Current === images.length - 1 ? 0 : Current + 1)
          }
          className="absolute top-1/2 right-0 -translate-y-1/2  p-2 h-full hover:bg-black/50 pl-5 md:pl-16"
        >
          &#10095;
        </button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full h-2 ${
                Current === index ? "bg-white w-6" : "bg-white/50 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
