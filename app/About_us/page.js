"use client"
import React from "react";
import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import Link from "next/link";
import eee from "@/public/assets/spider.png";

const HeroSection = () => {
    return (
        <section className="bg-black">
            <Image
              src={eee}
              alt="hero image"
              className="rounded-xl bg-black"
              width={1100}
              height={1000}
            />
        </section>
        
    );
};

export default HeroSection;
