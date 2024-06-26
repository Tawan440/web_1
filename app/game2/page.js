import React, { useState } from "react";
import Image from "next/image";
import head from "@/public/images/coin_head.png";
import tail from "@/public/images/coin_tail.png";

const HeroSection = () => {
  const [side, setSide] = useState(0); // 0 for head, 1 for tail
  const [flipping, setFlipping] = useState(false);

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
    <section className="w-full bg-black h-screen flex justify-center items-center">
      <div className="flex justify-center">
        {!flipping && (
          <div className="mt-10 rounded-xl overflow-hidden">
            <Image src={side === 0 ? head : tail} alt="coin image" width={500} height={500} />
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleClaick}
          className="mt-40 cursor-pointer text-white font-bold relative text-sm md:text-2xl lg:text-4xl xl:text-5xl w-48 md:w-72 h-12 md:h-16 lg:h-20 xl:h-24 text-center bg-gradient-to-r from-violet-500 via-sky-500 to-pink-500 rounded-full z-10 hover:animate-gradient-xy hover:bg-gradient-to-r hover:from-violet-500 hover:via-sky-500 hover:to-pink-500 hover:bg-length-100 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-gradient-to-r before:from-violet-500 before:via-sky-500 before:to-pink-500 before:bg-length-400 before:-z-10 before:rounded-30 before:hover:blur-40 before:transition-all before:ease-in-out before:duration-1000 before:hover:bg-length-10 active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-1 hover:border-b-6 active:border-b-2 active:brightness-90 active:translate-y-2"
        >
          {flipping ? "Flipping a coin..." : "Flip a coin"}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
fdsfds