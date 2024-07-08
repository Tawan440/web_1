"use client";
import React, { useState } from "react";
import Image from "next/image";
import head from "@/public/assets/coin_head.png";
import tail from "@/public/assets/coin_tail.png";
import idk from "@/public/assets/coin_idk.png";

const HeroSection = () => {
  const [side, setSide] = useState(0); // 0 for head, 1 for tail
  const [flipping, setFlipping] = useState(false);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    if (flipping) return; // Prevent multiple clicks during animation

    setFlipping(true);

    setTimeout(() => {
      const newSide = randomNumberInRange(0, 1);
      setSide(newSide);
      setTimeout(() => {
        setFlipping(false);
      }, 1000); // Set the total duration for the flip animation
    }, 500); // Set the duration for half of the flip animation
  };

  return (
    <section className="text-black grid gap-x-16 gap-y-8 grid-cols-1 w-full h-full bg-black justify-center items-center">
      <div className="flex justify-center">
        <div className="item-center justify-center rounded-xl overflow-hidden">
          {!flipping ? (
            <Image
              src={side === 0 ? head : tail}
              alt="coin image"
              width={500}
              height={500}
            />
          ) : (
            <Image src={idk} alt="coin image" width={500} height={500} />
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button onClick={handleClick} className="relative overflow-hidden bg-white border-2 border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-sm hover:shadow transition-all duration-500 ease-linear focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 active:scale-95">
          {flipping ? "Flipping a coin..." : "Flip a coin"}

          <span className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-100 ease-linear"></span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
