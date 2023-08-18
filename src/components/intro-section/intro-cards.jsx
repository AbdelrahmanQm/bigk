import React from "react";
import IntroCard from "./intro-card";
import { cardsData } from "./card-data";
const IntroCards = () => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-8 max-w-[1350px] m-auto items-center justify-center transform translate-y-[-50%] absolute z-30 ">
        {cardsData.map((card, id) => (
          <IntroCard key={id} text={card.text} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default IntroCards;
