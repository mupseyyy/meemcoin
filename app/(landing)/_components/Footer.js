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
            © &nbsp; <span className="text-duis text-shadow"><p>KITTY</p></span>{" "}
            community 2025.
            <br />
            <span className="underline decoration-duis">
              {"All cutes reserved for duis's dawgs."}
            </span>
          </p>

        </div>
      </div>
      <div className="overflow-hidden relative h-24">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d"
          className="aspect-[17.24] object-cover object-center w-full mt-5 min-h-[20px] min-w-[20px] overflow-hidden"
          alt=""
        />
      </div>

      <div className="absolute bottom-0 w-full">
        <div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
