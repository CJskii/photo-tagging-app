import React, { useState } from "react";
import PreviewIcons from "./PreviewIcons";

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
    <div className="w-full h-full flex flex-col justify-start items-center gap-24 py-12">
      <h1 className="text-5xl">Level 1</h1>
      <div className="flex justify-center items-center gap-4">
        {characters.map((char: Props, index: number) => {
          if (char.render) {
            return <PreviewIcons char={char} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default Level1;
