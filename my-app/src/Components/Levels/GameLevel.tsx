import { useEffect, useRef, useState } from "react";
import {
  calculateImageCoords,
  calculateContainerCoords,
} from "./HelperFunctions/CalculateCoords";
import PreviewIcons from "./PreviewIcons";
import Time from "../Time";
import RestartBtn from "../RestartBtn";
import Selection from "./Selection";
import GameEnded from "./GameEnded";

interface Props {
  name: string;
  render: boolean;
  isFound: boolean;
  updateCharacter: void;
  validateSelection: void;
}

interface SelectionProps extends Props {
  imageClickCoords: { x: number; y: number };
  setShowSelectionBox: boolean;
}

interface LevelProps {
  renderData: Props[];
  validationData: object;
  leaderboardData: {
    [key: string]: {
      time: number;
      timestamp: number;
    };
  };
  level: string;
}

const GameLevel = ({
  renderData,
  validationData,
  leaderboardData,
  level,
}: LevelProps) => {
  // ________ STATES ___________
  const [characters, setCharacters] = useState(renderData);
  const [allFound, setAllFound] = useState(false);
  const [showSelectionBox, setShowSelectionBox] = useState(false);
  const [imageClickCoords, setImageClickCoords] = useState({ x: 0, y: 0 });
  const [selectionBoxCoords, setSelectionBoxCoords] = useState({ x: 0, y: 0 });
  const [validSelections, setValidSelections] = useState(validationData);
  const [time, setTime] = useState(0);

  // change this to fetch in Time component
  const [timeData, setTimeData] = useState({
    levelBest: { time: "00:00:54" },
    currentTime: { time: "00:00:54" },
    userBest: { time: "00:00:54" },
  });

  // ________ HOOKS ___________

  useEffect(() => {
    setCharacters(renderData);
  }, [renderData]);

  useEffect(() => {
    const allCharactersFound = () => {
      const filtered = characters.filter((character: any) => {
        return character.isFound === false && character.render === true;
      });
      if (!filtered.length) {
        setAllFound(true);
      }
    };

    allCharactersFound();
  }, [characters]);

  const imageRef = useRef<HTMLImageElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  // ________ FUNCTIONS ___________

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

  const updateCharacter = (obj: any) => {
    const char = obj.name;
    const arr = [...characters];
    const filtered = arr.filter((character: any) => {
      return character.name == char;
    });
    filtered[0].isFound = true;
    setCharacters(arr);
  };

  const validateSelection = async (obj: any) => {
    console.log(validSelections);
    const characterName = obj.userSelection;
    const coords = obj.selectedCoords;
    const characterSelected = (validSelections as Array<object>)[
      characterName
    ] as Array<object>;

    const filteredSelections = characterSelected.filter((selection: any) => {
      return (
        coords.x >= selection.x.min &&
        coords.x <= selection.x.max &&
        coords.y >= selection.y.min &&
        coords.y <= selection.y.max
      );
    });

    if (filteredSelections.length) {
      return true;
    } else return false;
  };

  return (
    <>
      <h1 className="text-5xl lg:pr-8">{level}</h1>
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
        {allFound ? <RestartBtn /> : null}
        <Time
          time={time}
          setTime={setTime}
          allFound={allFound}
          level={level}
          leaderboardData={leaderboardData}
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
                    updateCharacter={updateCharacter}
                    validateSelection={validateSelection}
                  />
                );
            })}
          </div>
        )}
        {allFound ? (
          <GameEnded time={time} level={level} />
        ) : (
          <img
            ref={imageRef}
            src={`levels/level-${level.slice(-1)}.jpg`}
            className="rounded lg:w-[90vw] max-lg:p-2"
            onClick={(e) => {
              handleClick(e);
            }}
          />
        )}
      </div>
    </>
  );
};

export default GameLevel;
