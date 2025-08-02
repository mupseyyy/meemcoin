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
    <div id="tokenomics">
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-flow-col gap-5 gap-y-20 justify-center justify-items-center text-gray-200">
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
