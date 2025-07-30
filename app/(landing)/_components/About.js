import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div className="flex absolute -top-24 max-w-full overflow-clip">
        <div className="cloud -ms-6"></div>
      </div>
      <div id="about" className="max-w-[85rem] px-4 py-10 sm:py-14 mx-auto">
        <div className="relative mt-5 h-auto text-red-400 text-6xl">
          <p>
            &nbsp; &nbsp; &nbsp;KITTY <br />
            &nbsp; &nbsp; &nbsp;THE MECHANIC
          </p>
        </div>
        <div className="relative mt-5 h-auto text-red-600">
          <p>
            <span className="text-lg">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              FIRST FEMALE SHIBA - THE PEOPLE'S DOG COIN OF THIS CYCLE
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -
              PURE MEMETIC ENERGY - BONKS SISTER - ORGANIC <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              MOVEMENT
            </span>
          </p>
        </div>
        <div className="flex flex-col relative mt-5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:w-full">
              <button className="flex flex-col relative mt-5 bg-black text-white rounded px-6 py-4 w-fit cursor-pointer">
                Click me!
              </button>
            </div>
            <div className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
              <button className="flex flex-col relative mt-5 bg-black text-white rounded px-6 py-4 w-fit cursor-pointer">
                Click me!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
