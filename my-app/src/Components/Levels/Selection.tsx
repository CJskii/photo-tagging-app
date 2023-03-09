import React, { useRef } from "react";

interface Props {
  name: string;
  render: boolean;
  imageClickCoords: object;
  setShowSelectionBox: (showSelectionBox: boolean) => void;
}

const Selection = (char: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  console.log(char);
  const handleClick = () => {
    let userSelection = ref.current?.textContent;
    const selectedCoords = char.imageClickCoords;
    char.setShowSelectionBox(false);
    console.log({ userSelection, selectedCoords });
    // pass userSelection and selectedCoords to backend for validation
  };

  return (
    <>
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
    </>
  );
};

export default Selection;
