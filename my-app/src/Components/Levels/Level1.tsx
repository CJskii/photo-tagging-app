import React, { useState } from "react";
import PreviewIcons from "./PreviewIcons";
import Time from "../Time";
import RestartBtn from "../RestartBtn";

interface Props {
  name: string;
  render: boolean;
}

const Level1 = () => {
  const [characters, setCharacters] = useState([
    {
      name: "odlaw",
      render: true,
    },
    { name: "waldo", render: true },
    { name: "wizard", render: true },
    { name: "wenda", render: false },
  ]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-4 py-8 bg-primary">
      <h1 className="text-5xl lg:pr-8">Level 1</h1>
      <div className="flex justify-between items-center lg:w-[90vw]">
        <div className="flex flex-col justify-center items-start gap-4 w-content px-4">
          <h2 className="font-bold text-2xl">Characters to find: </h2>
          <div className="flex justify-center items-center gap-4 w-content">
            {characters.map((char: Props, index: number) => {
              if (char.render) {
                return <PreviewIcons char={char} key={index} />;
              }
            })}
          </div>
        </div>
        <RestartBtn />
        <Time />
      </div>
      <img
        src="levels/level-1.jpg"
        className="rounded lg:w-[90vw] max-lg:p-2"
      />
    </div>
  );
};

export default Level1;
