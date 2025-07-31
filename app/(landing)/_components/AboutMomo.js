import React from "react";

const AboutMomo = () => {
  return (
    <section id="about" className="flex w-full min-h-screen py-24 px-6 md:px-16 lg:px-24 justify-center items-center bg-gradient-to-b from-pink-200 via-pink-300 to-pink-400" style={{ backgroundColor: "#FFD3E6" }}>
      <div className="w-full max-w-7xl h-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          {/* Heading */}
          <div className="mb-8">
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight text-white font-luckiest-guy"
              style={{
                textShadow: "4px 4px 0 #000, 6px 6px 0 #000, 0 4px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, 2px 2px 0 #000",
                WebkitTextStroke: "4px #000"
              }}
            >
              ABOUT MOMO
            </h2>
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-800 text-lg leading-relaxed font-inter">
              MOMO IS BONKS CHEEKY LITTLE SISTER - PASTEL PINK ENERGY
              READY TO POUNCE BORN ON SOLANA. BUILT FOR FUN. BY THE
              PEOPLE. FOR THE PEOPLE. 100% FAIR LAUNCHED, NO CABAL, NO
              BUNDLES.
            </p>
          </div>
          
          {/* Tagline */}
          <div>
            <p className="text-gray-800 text-lg font-semibold font-inter tracking-wider">
              MOMO FETCHES GAINS, NOT STICKS
            </p>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/76badd71c648075d23f2c30b59378ee6194a004e?width=1256"
              alt="About MOMO"
              className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded-2xl border-4 border-black shadow-[8px_8px_0_0_#000]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMomo;
