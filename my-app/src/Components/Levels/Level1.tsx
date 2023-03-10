import React, { useState } from "react";
import GameLevel from "./GameLevel";

const Level1 = () => {
  const [data, setData] = useState([
    {
      characters: [
        {
          name: "odlaw",
          render: true,
        },
        { name: "waldo", render: true },
        { name: "wizard", render: true },
        { name: "wenda", render: false },
      ],
      level: { name: "Level 1" },
      current: { time: "00:01:23" },
      userBest: { time: "00:03:55" },
      levelBest: { time: "00:00:54" },
    },
  ]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-4 py-8 bg-primary">
      <GameLevel data={data} />
    </div>
  );
};

export default Level1;
