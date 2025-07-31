import React from "react";

const ContractSection = () => {
  return (
    <section id="contract" className="flex w-full justify-center items-center" style={{ backgroundColor: "rgba(228, 224, 225, 1)", padding: "84px 128px 108px" }}>
      <div className="w-full max-w-6xl flex flex-col items-center gap-10">
        {/* TOKENOMICS Heading */}
        <div className="flex flex-col items-center">
          <div className="my-16 text-white text-center text-6xl font-luckiest-guy" style={{ textShadow: "4px 4px 0 #000, 6px 6px 0 #000, 0 4px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, 2px 2px 0 #000" }}>
            CONTRACT
          </div>
        </div>
        
        {/* Contract Address Container */}
        <div className="w-full max-w-2xl">
          <div className="relative flex justify-center items-center">
            <div className="flex w-full max-w-xl h-16 px-4 py-2 justify-center items-center rounded-full border-4 border-black bg-white bg-opacity-90 shadow-[6px_6px_0_0_#000] backdrop-blur-sm">
              <div className="flex w-full justify-center items-center">
                <span className="text-gray-800 font-inter text-sm md:text-base font-normal leading-6 text-center truncate px-4">
                  <p>
                    CA<span style={{fontSize: "18px"}}>:</span>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractSection;
