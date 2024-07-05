import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black justify-between items-center">
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0lY_TpyAnmc?si=FRnmHWmyTdql76SN"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe> */}
      {/* <video
        width="420"
        height="340"
        controls
        src="/videos/videeo.mp4"
        autoPlay
      >
        <source src="/../videos/videeo.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
             */}
      <div className="container">
        <HeroSection />
      </div>
    </main>
  );
}
