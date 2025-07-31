import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div id="about" className="max-w-[85rem] px-4 py-10 sm:py-14 mx-auto">
        <div className="relative mt-5 h-auto text-red-400 text-6xl">
        </div>
        <div className="relative mt-5 h-auto text-red-600">
          <div className="flex flex-col relative mt-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col relative mt-5">
          <div className="flex gap-5">
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
