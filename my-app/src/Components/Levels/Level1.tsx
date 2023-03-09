import Selection from "./Selection";
import React, { useState, useRef, useEffect } from "react";
import PreviewIcons from "./PreviewIcons";
import Time from "../Time";
import RestartBtn from "../RestartBtn";
import {
  calculateImageCoords,
  calculateContainerCoords,
} from "./HelperFunctions/CalculateCoords";

interface Props {
  name: string;
  render: boolean;
}

interface SelectionProps extends Props {
  imageClickCoords: { x: number; y: number };
  setShowSelectionBox: boolean;
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
  const [imageClickCoords, setImageClickCoords] = useState({ x: 0, y: 0 });
  const [selectionBoxCoords, setSelectionBoxCoords] = useState({ x: 0, y: 0 });

  const imageRef = useRef<HTMLImageElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const imageCoords = getImageClickCoords(e);
    const containerCoords = getSelectionBoxCoords(e);
    if (imageCoords && containerCoords) {
      setImageClickCoords(imageCoords);
      setSelectionBoxCoords(containerCoords);
      setShowSelectionBox(!showSelectionBox);
    }
  };

  const getImageClickCoords = (e: React.MouseEvent<HTMLImageElement>) => {
    const image = imageRef.current;
    if (image) return calculateImageCoords(image, e);
  };

  const getSelectionBoxCoords = (e: React.MouseEvent<HTMLDivElement>) => {
    const div = divRef.current;
    if (div) return calculateContainerCoords(div, e);
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
      <div ref={divRef} className="relative">
        {showSelectionBox && (
          <div
            className="absolute bg-base-100 p-2 rounded"
            style={{
              top: `${selectionBoxCoords.y}px`,
              left: `${selectionBoxCoords.x}px`,
            }}
          >
            {characters.map((char, index) => {
              if (char.render)
                return (
                  <Selection
                    key={index}
                    {...char}
                    imageClickCoords={imageClickCoords}
                    setShowSelectionBox={setShowSelectionBox}
                  />
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
