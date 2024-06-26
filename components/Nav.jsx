import React from "react";
import Link from "next/link";
const Nav = () => {
  return (
    <section className="text-black bg-gradient-to-r from-blue-400 to-blue-950 border-4 border-white flex items-center h-24">
      <div className="flex text-3xl gap-9 ml-10">
        <Link
          className="rounded-2xl shadow-[0_0_10px_black] px-4 py-2 cursor-pointer pr-9 bg-white hover:text-white hover:bg-black hover:shadow-[0_0_10px_white] justify-center transition-colors duration-500 items-center"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="rounded-2xl shadow-[0_0_10px_black] px-4 py-2 cursor-pointer pr-9 bg-white hover:text-white hover:bg-black hover:shadow-[0_0_10px_white] justify-center transition-colors duration-500 items-center"
          href={"/About"}
        >
          About
        </Link>
      </div>
    </section>
  );
};

export default Nav;
