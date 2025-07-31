import Image from "next/image";

import Header from "./_components/Header";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import FigmaHeader from "./_components/FigmaHeader";
import Contract from "./_components/Contract";

import About from "./_components/About";
import Tokenomics from "./_components/Tokenomics";
import Exchanges from "./_components/Exchanges";
import HowToBuy from "./_components/HowToBuy";
import WallOfLove from "./_components/WallOfLove";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      {/* New Figma Header */}
      <FigmaHeader />

      {/* New Figma Hero Section */}
      <Hero />

      {/* Original sections restored */}
      <div className="bg-[#e4e0e1] -mt-1">
        <About />
        <div className="max-w-[85rem] mx-auto mt-24">
          <span className="flex items-center">
            <span className="h-[3px] flex-1 bg-duis"></span>
            <div>
            </div>
            <span className="h-[3px] flex-1 bg-duis"></span>
          </span>
        </div>

        <Tokenomics />

        {/* Contract Section */}
        <Contract />
        <div className="max-w-[85rem] mx-auto mt-24">
          <span className="flex items-center">
            <span className="h-[3px] flex-1 bg-duis"></span>
            <div>
            </div>
            <span className="h-[3px] flex-1 bg-duis"></span>
          </span>
        </div>

        <HowToBuy />
        <div className="text-center">
          <div className="flex justify-center">
          </div>
          <div className="mt-5">
            <p className="font-stopbuck text-2xl text-black">Meow! Meow!</p>
          </div>
        </div>
        {/* <WallOfLove /> */}
        <div className="flex justify-start pl-4">
        </div>
        <Footer />
      </div>
    </>
  );
}
