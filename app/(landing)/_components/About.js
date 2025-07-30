import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div className="flex absolute -top-12 left-0 w-full overflow-clip z-10">
        <div className="cloud -ml-6"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>
      <div id="about" className="max-w-[85rem] px-4 py-10 sm:py-14 mx-auto">
        <div className="relative mt-5 h-auto text-red-400 text-6xl">
          <p>
            &nbsp; &nbsp; &nbsp;KITTY <br />
            &nbsp; &nbsp; &nbsp;THE MECHANIC
          </p>
          <a
            target="_blank"
            href="https://dexscreener.com/solana/8j5r6kteet9cm6wamq2mwb2sneu97cz1jtksdg76moon"
            className="transition duration-200 font-stopbuck text-lg sm:text-2xl rounded-xl px-3.5 py-2.5 font-medium text-duis shadow-2xl bg-white hover:bg-duis hover:text-gray-800 hover:outline-black outline outline-2 outline-offset-0 w-36 mr-auto mt-4"
          >
            <p>Buy $DUIS</p>
          </a>
        </div>
        <div className="relative mt-5 h-auto text-red-600">
          <p>
            <span className="text-lg">
              <br />
              <br />
            </span>
          </p>
          <div className="flex flex-col relative mt-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a"
                  className="aspect-[1.19] object-cover object-center w-full mt-5 min-h-5 min-w-5 overflow-hidden"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col relative mt-5">
          <div className="flex gap-5">
            <div className="flex flex-col w-6/12">
              <button className="flex flex-col relative mt-5 bg-black text-white rounded px-6 py-4 w-fit cursor-pointer">
                Click me!
              </button>
            </div>
            <div className="flex flex-col w-6/12 ml-5">
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
