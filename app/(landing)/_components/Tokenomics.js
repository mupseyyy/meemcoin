import React from "react";
import Card from "@/components/Card";

const cards = [
  {
    img: "max-supply.gif",
    title: "Max Supply",
    desc: "1.000.000.000",
  },
  {
    img: "tax.gif",
    title: "Tax",
    desc: "0%",
  },
  {
    img: "burn.gif",
    title: "Liquidity",
    desc: "Burnt",
  },
  {
    img: "solana.gif",
    title: "Network",
    desc: "Solana",
  },
];

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="max-w-[85rem] mx-auto py-12">
      <div className="my-16 text-white text-center text-6xl font-luckiest-guy" style={{ textShadow: "4px 4px 0 #000, 6px 6px 0 #000, 0 4px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, 2px 2px 0 #000" }}>
        <span className="builder-text">CONTRACT</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-flow-col gap-5 gap-y-20 justify-center justify-items-center">
        {cards.map((card, idx) => (
          <div key={idx} className="shrink-0">
            <Card props={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
