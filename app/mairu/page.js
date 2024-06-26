import React from 'react';

const Button = () => {
  return (
    <button
      className="relative h-12 px-6 border-2 border-black bg-gray-200 transition duration-200 ease-in-out transform hover:scale-95 cursor-crosshair"
    >
      <span className="absolute inset-0 bg-gray-200 transition duration-200 ease-in-out"></span>
      <span className="ml-96 text-black justify-center items-center absolute top-3 left-0 w-full h-4 bg-gray-200 transition duration-200 ease-in-out transform origin-left scale-x-0"></span>
      aaaaaaaaaaaaaaaaa
    </button>
  );
};

export default Button;
