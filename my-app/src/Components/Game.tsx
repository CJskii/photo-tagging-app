import React, { useState } from "react";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";

interface LevelData {
  level: string;
  description: string;
  path: string;
  src: string;
}

const Game = () => {
  const [levels, setLevels] = useState([
    { level: "1", description: "Level 1", src: "level-1.jpg", path: "/level1" },
    { level: "2", description: "Level 2", src: "level-2.jpg", path: "/level2" },
    { level: "3", description: "Level 3", src: "level-3.jpg", path: "/level3" },
    { level: "4", description: "Level 4", src: "level-4.jpg", path: "/level4" },
    { level: "5", description: "Level 5", src: "level-5.jpg", path: "/level5" },
    { level: "6", description: "Level 6", src: "level-6.jpg", path: "/level6" },
  ]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-24 py-12">
      <h1 className="text-5xl">Select level</h1>
      <div className="lg:full gap-8 h-full flex justify-evenly flex-wrap">
        {levels.map((level: LevelData, index: number) => {
          return <GameCard data={level} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Game;
