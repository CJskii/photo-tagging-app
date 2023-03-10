import React, { useEffect, useRef, useState } from "react";

interface Props {
  name: string;
  render: boolean;
  isFound: boolean;
  imageClickCoords: object;
  setShowSelectionBox: (showSelectionBox: boolean) => void;
  updateCharacter: (obj: object) => void;
  validateSelection: any;
}

const Selection = (char: Props) => {
  const [characterFound, setCharacterFound] = useState(char.isFound);
  useEffect(() => {
    setCharacterFound(char.isFound);
  }, [char.isFound]);

  const ref = useRef<HTMLDivElement>(null);

  const handleClick = async () => {
    let userSelection = ref.current?.textContent;
    const selectedCoords = char.imageClickCoords;
    char.setShowSelectionBox(false);
    const isValid = await char.validateSelection({
      userSelection,
      selectedCoords,
    });
    if (isValid) {
      char.updateCharacter(char);
    }
  };

  return (
    <>
      {characterFound ? null : (
        <div
          className="flex justify-center items-center border-2 gap-2 rounded bg-base-200 hover:bg-secondary cursor-pointer my-2"
          onClick={handleClick}
          id={`${char.name}`}
        >
          <img
            className="w-[50px] h-[50px] m-2"
            src={`/icons/${char.name}-transparent.png`}
            alt={`${char.name} transparent`}
          />
          <div className="pr-4" ref={ref}>
            {char.name.charAt(0).toUpperCase() + char.name.slice(1)}
          </div>
        </div>
      )}
    </>
  );
};

export default Selection;
