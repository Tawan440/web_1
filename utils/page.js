"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="h-screen flex justify-center bg-white items-center">
            <a className="text-blue-600 hover:underline transition-opacity hover:font-extrabold duration-1000 text-9xl" href="https://www.youtube.com/watch?v=sXxbkjlHvf4">
                oreo
            </a>
        </section>
    );
};

export default HeroSection;
