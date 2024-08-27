import React from "react";

const Button = () => {
  return (
    <section className="w-full h-full">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 min-w-full min-h-full object-cover h-screen"
        src="/assets/rick.mp4"
        type="video/mp4"
      />
    </section>
  );
};

export default Button;
