import React from "react";
import LinkCardCircle from "@/components/LinkCardCircle";

const cards = [
  {
    link: "https://t.me/duis_solana",
    title: "telegram",
    icon: "Telegram",
  },
  {
    link: "https://x.com/duisonsolana",
    title: "x",
    icon: "X",
  },
  {
    link: "https://www.instagram.com/nguyen_van_dui",
    title: "Instagram",
    icon: "Instagram",
  },

  {
    link: "https://www.tiktok.com/@nguyen_van_dui",
    title: "Tiktok",
    icon: "Tiktok",
  },

];

const Socials = () => {
  return (
    <div>
      <div className="hidden">
        <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center">
          Socials
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, idx) => {
          if (card.icon === 'Telegram') {
            return (
              <a key={idx} href={card.link} target="_blank">
              </a>
            );
          }
          return <LinkCardCircle key={idx} props={card} />;
        })}
      </div>
    </div>
  );
};

export default Socials;
