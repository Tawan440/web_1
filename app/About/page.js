"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import aaa from "@/public/images/forgot.png";

const HeroSection = () => {
    return (
        <section className="bg-black">
            <Image
              src={aaa}
              alt="hero image"
              className="rounded-xl bg-black"
              width={1530}
              height={1000}
            />
        </section>
    );
};

export default HeroSection;
