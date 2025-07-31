import Image from "next/image";

import Header from "./_components/Header";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";

import About from "./_components/About";
import Tokenomics from "./_components/Tokenomics";
import Exchanges from "./_components/Exchanges";
import HowToBuy from "./_components/HowToBuy";
import WallOfLove from "./_components/WallOfLove";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      {/* New Figma Hero Section */}
      <Hero />

      {/* Original sections restored */}
      <div className="bg-[#e4e0e1]">
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
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
        className="aspect-[1.42] object-cover object-center w-full mt-5 min-h-5 min-w-5 overflow-hidden"
        alt=""
      />
    </>
  );
}
