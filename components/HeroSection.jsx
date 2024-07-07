import React from "react";
import Image from "next/image";
import Link from "next/link";
import Skibidi from "@/public/images/hero-image.png";
import Skibidi1 from "@/public/images/hero-image1.png";
import Skibidi3 from "@/public/images/hero-image3.png";

const HeroSection = () => {
  return (
    <div className="w-full max-w-screen-2xl">
      <section className="bg-white mt-36 justify-center rounded-lg h-64 w-full border-4 border-white">
        <p className="text-black justify-center items-center text-8xl font-extrabold . flex flex-col mt-16">
          Welcome to our website game
        </p>
      </section>
      <iframe
        className="mt-10 justify-center items-center ml-80"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0lY_TpyAnmc?si=FRnmHWmyTdql76SN"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <div className="grid gap-x-16 gap-y-8 grid-cols-3 mt-10">
        <Link
          href={
            "https://www.roblox.com/games/17527713600/Citizen-Hustle-Police-Bustle-Tycoon"
          }
          className="max-w-full"
        >
          <Image
            src={Skibidi1}
            alt="hero image"
            className="rounded-xl border-4 border-black"
            width={500}
            height={500}
          />
          <h1 className="text-2xl text-center justify-center items-center bg-white text-black rounded-lg border-4 border-black">
            a cool game on roblox make by
            <p>-boat</p>
            <p>-tawan</p>
            <p>-taewon</p>
            <p>-jojo</p>
            <p>game about police areest mafia and cilizen work for money</p>
          </h1>
        </Link>
        <Link href={"/game1"} className="">
          <Image
            src={Skibidi3}
            alt="hero image"
            className="rounded-xl"
            width={500}
            height={500}
          />
          <h1 className="text-2xl text-center justify-center items-center bg-white text-black rounded-lg border-4 border-black">
            click da red button
            <p>-get more point</p>
            <p>-more cool</p>
            <p>-dont use auto click</p>
            <p>-have fun</p>
            <p>more have fun</p>
          </h1>
        </Link>
        <Link href={"/game2"} className="">
          <Image
            src={Skibidi3}
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
