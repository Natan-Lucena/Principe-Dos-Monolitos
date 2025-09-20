// src/components/Carousel.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

interface CarouselProps {
  images: string[];
  speed?: number;
}

export default function Carousel({ images, speed = 30 }: CarouselProps) {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const doubledImages = [...images, ...images];

  useEffect(() => {
    const containerWidth = containerRef.current?.scrollWidth || 0;
    const distance = containerWidth / 2;

    const duration = distance / speed;

    controls.start({
      x: -distance,
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls, speed]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full h-64 rounded-2xl bg-transparent"
    >
      <motion.div className="flex" animate={controls}>
        {doubledImages.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-80 h-64 relative">
            <Image
              src={src}
              alt={`Carousel image ${i}`}
              fill
              className="object-cover rounded-xl shadow-md"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
