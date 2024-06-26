"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import head from "@/public/images/coin_head.png";
import tail from "@/public/images/coin_tail.png";

const HeroSection = () => {
  const [num, setNum] = useState(0);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClaick = () => {
    setNum(randomNumberInRange(0, 1));
  };
  if (num == 0) {
    var coin = head;
  } else {
    var coin = tail;
  }
  return (
    <section className="grid h-screen justify-center bg-gradient-to-tr from-red-600 to-orange-900 items-center">
      <Image
        src={coin}
        alt="hero image"
        className="rounded-xl justify-center items-center"
        width={500}
        height={500}
      />
      <button onClick={handleClaick} className="bg-slate-200 text-9xl">Click Me Generate</button>
    </section>
  );
};

export default HeroSection;
