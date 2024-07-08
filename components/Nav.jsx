"use client";
import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { Squash as Hamburger } from "hamburger-react";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="text-black bg-gradient-to-r from-blue-400 to-blue-950 border-4 border-white flex items-center h-24">
      <div className="flex text-3xl gap-9 ml-10 items-center">
        <div className="justify-end items-end flex">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <Link href={"/"}>
          {" "}
          {/* Corrected href prop */}
          <button
            type="button"
            className="bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
          >
            <div className="bg-blue-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                ></path>
                <path
                  fill="#000000"
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                ></path>
              </svg>
            </div>
            <p className="translate-x-2">Go Back</p>
          </button>
        </Link>

        <Link
          href={"/About"}
          className="rounded-2xl shadow-[0_0_10px_black] px-4 py-2 cursor-pointer pr-9 bg-white hover:text-white hover:bg-black hover:shadow-[0_0_10px_white] justify-center transition-colors duration-500 items-center"
        >
          About
        </Link>
      </div>
    </section>
  );
};

export default Nav;
