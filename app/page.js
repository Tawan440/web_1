import Image from "next/image";
import HeroSection from "../components/HeroSection"
import Nav from "../components/Nav";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black justify-between items-center">
      <div className="container">
        <HeroSection />
      </div>
    </main>
  );
}
