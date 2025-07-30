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
              <br />
              <br />
            </span>
          </p>
          <div className="flex flex-col relative mt-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:w-full">
                <div className="flex flex-col relative mt-5 h-auto pb-8"></div>
              </div>
              <div className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
                <Image
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a"
                  className="aspect-[1.19] object-cover object-center w-full mt-5 min-h-5 min-w-5 overflow-hidden"
                  alt=""
                  width={400}
                  height={336}
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
