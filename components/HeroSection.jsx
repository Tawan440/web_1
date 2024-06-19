"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Skibidi from "@/public/images/hero-image.png";
import Skibidi1 from "@/public/images/hero-image1.png";
import Skibidi2 from "@/public/images/hero-image2.png";


const HeroSection = () => {
  return (
    <div className="w-full max-w-screen-2xl">
      <section className="bg-blue-300 mt-36 justify-center rounded-lg h-64 w-full border-4 border-white">
        <p className="text-black justify-center items-center text-9xl font-extrabold flex flex-col mt-16">
          aaaaaaaaaaaaaa
        </p>
      </section>
      <div className="grid gap-x-16 gap-y-8 grid-cols-3 mt-10 justify-center items-center">
          <Link href={"https://www.roblox.com/games/17527713600/Citizen-Hustle-Police-Bustle-Tycoon"} className="">
            <Image
              src={Skibidi1}
              alt="hero image"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </Link>
          <Link href={"/"} className="">
            <Image
              src={Skibidi}
              alt="hero image"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </Link>
          <Link href={"/"} className="">
            <Image
              src={Skibidi}
              alt="hero image"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </Link>
          <Link href={"/"} className="">
            <Image
              src={Skibidi}
              alt="hero image"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </Link>
          <Link href={"/"} className="">
            <Image
              src={Skibidi}
              alt="hero image"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </Link>
          <Link href={"/"} className="">
            <Image
              src={Skibidi}
              alt="hero image"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </Link>
          <Link href={"/"} className="">
            <Image
              src={Skibidi}
              alt="hero image"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </Link>
          <Link href={"/"} className="">
            <Image
              src={Skibidi}
              alt="hero image"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </Link>
          <Link href={"/"} className="">
            <Image
              src={Skibidi}
              alt="hero image"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </Link>
          <Link href={"/"} className="">
            <Image
              src={Skibidi}
              alt="hero image"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </Link>
          <Link href={"/"} className="">
            <Image
              src={Skibidi}
              alt="hero image"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </Link>
          <Link href={"/"} className="">
            <Image
              src={Skibidi}
              alt="hero image"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </Link>
          <Link href={"/"} className="">
            <Image
              src={Skibidi}
              alt="hero image"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </Link>
          <Link href={"/"} className="">
            <Image
              src={Skibidi}
              alt="hero image"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </Link>
          <Link href={"https://nzp.gay/"} className="">
            <Image
              src={Skibidi2}
              alt="hero image"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </Link>
      </div>
    </div>
  );
};

export default HeroSection;
