"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import head from "@/public/images/coin_head.png";
import tail from "@/public/images/coin_tail.png";

const HeroSection = () => {
  const [num, setNum] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClaick = () => {
    setFlipping(true);
    setTimeout(() => {
      setNum(randomNumberInRange(0, 1));
      setFlipping(false);
    }, 1000); 
  };
  const coin = num === 0 ? head : tail;

  return (
    <section className="w-full bg-black h-screen justify-center items-center">
      <div className="justify-center flex">
        <Image
          src={coin}
          alt="hero image"
          className="mt-10 rounded-xl justify-center items-center"
          width={500}
          height={500}
        />
      </div>
      <div className="justify-center flex">
        <button
          onClick={handleClaick}
          av
          className="mt-40 text-5xl cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          {flipping ? "Flipping a coin..." : "Flip a coin"}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
