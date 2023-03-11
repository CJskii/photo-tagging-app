import { useEffect, useRef, useState } from "react";
import {
  calculateImageCoords,
  calculateContainerCoords,
} from "./HelperFunctions/CalculateCoords";
import PreviewIcons from "./PreviewIcons";
import Time from "../Time";
import RestartBtn from "../RestartBtn";
import Selection from "./Selection";

interface Props {
  name: string;
  render: boolean;
}

interface SelectionProps extends Props {
  imageClickCoords: { x: number; y: number };
  setShowSelectionBox: boolean;
}

const GameLevel = (data: any) => {
  const leveldata = data.data;

  const [characters, setCharacters] = useState(leveldata.characters);
  const [level, setLevel] = useState(leveldata.level);
  // change this to fetch in Time component
  const [timeData, setTimeData] = useState({
    levelBest: { time: "00:00:54" },
    currentTime: { time: "00:00:54" },
    userBest: { time: "00:00:54" },
  });

  useEffect(() => {
    setCharacters(leveldata.characters);
    setLevel(leveldata.level);
  }, [data]);

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
    <>
      <h1 className="text-5xl lg:pr-8">{level.name}</h1>
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
        <Time
          currentTime={timeData.currentTime}
          levelBest={timeData.levelBest}
          userBest={timeData.userBest}
        />
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
            {characters.map((char: Props, index: number) => {
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
          src={`levels/level-${level.name.slice(-1)}.jpg`}
          className="rounded lg:w-[90vw] max-lg:p-2"
          onClick={(e) => {
            handleClick(e);
          }}
        />
      </div>
    </>
  );
};

export default GameLevel;
