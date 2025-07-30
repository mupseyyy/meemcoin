import React from "react";
import Image from "next/image";
import Socials from "./Socials";

import { contractAddress } from "@/constants";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="text-center font-stopbuck mt-16 pb-5 border-t border-gray-100 pt-8">
        <div className="my-5 mb-10">
          <Socials />
        </div>
        <div>
          <p className="text-md/relaxed text-gray-500">
            © &nbsp; <span className="text-duis text-shadow">DUIS</span>{" "}
            community 2024.
            <br />
            <span className="underline decoration-duis">
              {"All cutes reserved for duis's dawgs."}
            </span>
          </p>
          <p className="text-black mt-4 px-3 text-base sm:text-lg md:text-2xl opacity-30 break-words">
            {contractAddress}
          </p>
        </div>
      </div>
      <div class="overflow-hidden relative h-24">
        <img className="absolute bottom-0 w-full" src="grass.svg" alt="grass" />
      </div>

      <div className="absolute bottom-0 w-full">
        <div>
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d"
                className="object-cover object-center w-full mt-5 aspect-[17.24] min-h-[20px] min-w-[20px] overflow-hidden"
                alt=""
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex justify-around px-5">
                <div className="flex">
                  <div>
                    <Image
                      className=""
                      src="/collection/1.png"
                      width={200}
                      height={200}
                      alt="dui 1"
                    />
                  </div>
                  <div>
                    <Image
                      className=""
                      src="/collection/2.png"
                      width={200}
                      height={200}
                      alt="dui 2"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <Image
                      className=""
                      src="/collection/4.png"
                      width={200}
                      height={200}
                      alt="dui 4"
                    />
                  </div>
                  <div>
                    <Image
                      className=""
                      src="/collection/3.png"
                      width={200}
                      height={200}
                      alt="dui 3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
