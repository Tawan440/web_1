"use client";
import React, { useState } from "react";
import Image from "next/image";
import head from "@/public/images/coin_head.png";
import tail from "@/public/images/coin_tail.png";
import idk from "@/public/images/coin_idk.png";

const HeroSection = () => {
  const [side, setSide] = useState(0); // 0 for head, 1 for tail
  const [flipping, setFlipping] = useState(false);
  // ajkosdsajdnsjhduasfbjkafubdfisyabd
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClaick = () => {
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
    <section className="grid gap-x-16 gap-y-8 grid-cols-1 w-full h-full bg-black justify-center items-center">
      <div className="flex justify-center">
        {!flipping ? (
          <div className="item-center justify-center rounded-xl overflow-hidden">
            <Image
              src={side === 0 ? head : tail}
              alt="coin image"
              width={500}
              height={500}
            />
          </div>
        ) : (
          <div className="item-center justify-center rounded-xl overflow-hidden">
          <Image
            src={idk}
            alt="coin image"
            width={500}
            height={500}
          />
        </div>
        )}
      </div>
      <div className="flex item-center justify-center">
        <button
          onClick={handleClaick}
          className="text-7xl -mt-10 item-center cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          {flipping ? "Flipping a coin..." : "Flip a coin"}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
