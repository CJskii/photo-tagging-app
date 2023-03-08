import React, { useState, useRef, useEffect } from "react";
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
  const [showSelectionBox, setShowSelectionBox] = useState(false);
  const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const coords = calculateClickCoords(e);
    setShowSelectionBox(!showSelectionBox);

    if (coords) {
      setClickCoords(coords);
    }
  };

  const calculateClickCoords = (e: React.MouseEvent<HTMLImageElement>) => {
    const image = imageRef.current;
    if (image) {
      const rect = image.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const imageWidth = image.naturalWidth;
      const imageHeight = image.naturalHeight;
      const pixelX = Math.round(Math.floor((x / rect.width) * imageWidth));
      const pixelY = Math.round(Math.floor((y / rect.height) * imageHeight));
      console.log(
        `Clicked at (${pixelX}, ${pixelY}) in image with size (${imageWidth}, ${imageHeight})`
      );
      return { x: pixelX, y: pixelY };
      // validate
    }
  };

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
      <div className="relative">
        {showSelectionBox && (
          <div
            className="absolute bg-base-100 p-2 m-8 rounded"
            style={{ top: `${clickCoords.y}px`, left: `${clickCoords.x}px` }}
          >
            {characters.map((char, index) => {
              if (char.render)
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center border-2 gap-2 rounded bg-base-200 hover:bg-secondary cursor-pointer my-2"
                  >
                    <img
                      className="w-[50px] h-[50px] m-2"
                      src={`/icons/${char.name}-transparent.png`}
                      alt={`${char.name} transparent`}
                    />
                    <div className="pr-4">
                      {char.name.charAt(0).toUpperCase() + char.name.slice(1)}
                    </div>
                  </div>
                );
            })}
          </div>
        )}
        <img
          ref={imageRef}
          src="levels/level-1.jpg"
          className="rounded lg:w-[90vw] max-lg:p-2"
          onClick={(e) => {
            handleClick(e);
          }}
        />
      </div>
    </div>
  );
};

export default Level1;
