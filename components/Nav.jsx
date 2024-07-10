"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [NavisOpen, setNavOpen] = useState(false);
  const [AboutOpen, setAbout] = useState(false);

  const toggleNav = () => {
    setNavOpen(!NavisOpen);
  };

  const toggleAbout = () => {
    setAbout(!AboutOpen);
  };

  return (
    <div>
      {NavisOpen ? (
        <section className="text-black bg-gradient-to-r from-blue-400 to-blue-950 border-4 border-white flex items-center h-24">
          <div onClick={toggleNav} className="ml-5">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div className="flex text-3xl gap-9 ml-10 items-center">
            <Link
              href={"/"}
              className="rounded-2xl shadow-[0_0_10px_black] px-4 py-2 cursor-pointer pr-9 bg-white hover:text-white hover:bg-black hover:shadow-[0_0_10px_white] justify-center transition-colors duration-500 items-center"
            >
              go back
            </Link>
            <div className="relative">
              <p
                onClick={toggleAbout}
                className="rounded-2xl shadow-[0_0_10px_black] px-4 py-2 cursor-pointer pr-9 bg-white hover:text-white hover:bg-black hover:shadow-[0_0_10px_white] justify-center transition-colors duration-500 items-center"
              >
                About
              </p>
              {AboutOpen && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link href="/About_us">
                      <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      About us
                      </p>
                    </Link>
                    <Link href="/Contacts">
                      <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Contacts us
                      </p>
                    </Link>
                    <Link href="/credit">
                      <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      credit
                      </p>
                    </Link>
                    <Link href="/FREEROBUX">
                      <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      FREE ROBUX
                      </p>
                    </Link>
                    {/* <Link href="/option5">
                      <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Option 5
                      </p>
                    </Link> */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <div
          className={
            "text-black bg-gradient-to-r bg-blue-400 to-blue-950 border-4 border-white flex items-center max-h-24 max-w-24 h-24 w-24 ease-in-out duration-1000"
          }
          onClick={toggleNav}
        >
          <div onClick={toggleNav} className="ml-5">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
