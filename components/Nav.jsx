"use client";
import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { Squash as Hamburger } from "hamburger-react";
// import { Transition } from "@tailwindui/react";
const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [NavisOpen, setNavOpen] = useState(false);

  const aaacat = () => {
    setNavOpen(!NavisOpen);
  };
  return (
    <div>
      {NavisOpen == true ? (
 
          <section className="text-black bg-gradient-to-r from-blue-400 to-blue-950 border-4 border-white flex items-center h-24">
            <div onClick={aaacat} className="ml-5">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <div className="flex text-3xl gap-9 ml-10 items-center">
              <Link
                href={"/"}
                className="rounded-2xl shadow-[0_0_10px_black] px-4 py-2 cursor-pointer pr-9 bg-white hover:text-white hover:bg-black hover:shadow-[0_0_10px_white] justify-center transition-colors duration-500 items-center"
              >
                go back
              </Link>

              <Link
                href={"/About"}
                className="rounded-2xl shadow-[0_0_10px_black] px-4 py-2 cursor-pointer pr-9 bg-white hover:text-white hover:bg-black hover:shadow-[0_0_10px_white] justify-center transition-colors duration-500 items-center"
              >
                About
              </Link>
            </div>
          </section>
 
      ) : (

          <div
            className={'text-black bg-gradient-to-r bg-blue-400 to-blue-950 border-4 border-white flex items-center max-h-24 max-w-24 h-24 w-24 ease-in-out duration-1000'}
            onClick={aaacat}
          >
            <div onClick={aaacat} className="ml-5">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
 
      )}
    </div>
  );
};

export default Nav;
