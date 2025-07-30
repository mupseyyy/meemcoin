import Image from "next/image";

import Header from "./_components/Header";
import Nav from "./_components/Nav";

import About from "./_components/About";
import Tokenomics from "./_components/Tokenomics";
import Exchanges from "./_components/Exchanges";
import HowToBuy from "./_components/HowToBuy";
import WallOfLove from "./_components/WallOfLove";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative mt-5 h-auto">
        Enter some text...
      </div>
      <div className="bg-[#e4e0e1]">
        <Header>
          <Nav />
        </Header>
        <About />
        <div className="max-w-[85rem] mx-auto mt-24">
          <span className="flex items-center">
            <span className="h-[3px] flex-1 bg-duis"></span>
            <div>
              <Image
                className=""
                src="/collection/5.png"
                width={300}
                height={300}
                alt="dui-5"
              />
            </div>
            <span className="h-[3px] flex-1 bg-duis"></span>
          </span>
        </div>

        <Tokenomics />
        <div className="max-w-[85rem] mx-auto mt-24">
          <span className="flex items-center">
            <span className="h-[3px] flex-1 bg-duis"></span>
            <div>
              <Image
                className=""
                src="/collection/7.png"
                width={300}
                height={300}
                alt="dui-7"
              />
            </div>
            <span className="h-[3px] flex-1 bg-duis"></span>
          </span>
        </div>

        <HowToBuy />
        <div className="text-center">
          <div className="flex justify-center">
            <Image
              className="hidden md:block"
              src="/collection/6.png"
              width={300}
              height={300}
              alt="dui-6"
            />
            <Image
              className=""
              src="/collection/8.png"
              width={300}
              height={300}
              alt="dui-8"
            />
          </div>
          <div className="mt-5">
            <p className="font-stopbuck text-2xl text-black">Woof! Woof!</p>
          </div>
        </div>
        {/* <WallOfLove /> */}
        <div className="flex justify-start pl-4">
          <a
            href="https://dexscreener.com/solana/8j5r6kteet9cm6wamq2mwb2sneu97cz1jtksdg76moon"
            target="_blank"
            className="transition duration-200 font-stopbuck text-lg sm:text-2xl rounded-xl px-3.5 py-2.5 font-medium text-duis shadow-2xl bg-white hover:bg-duis hover:text-gray-800 hover:outline-black outline outline-2 outline-offset-0 w-36"
          >
            Buy $DUIS
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
}
