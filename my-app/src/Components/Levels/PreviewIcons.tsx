interface CharData {
  name: string;
  render: boolean;
  isFound: boolean;
}

interface Props {
  char: CharData;
}

const PreviewIcons = (char: Props) => {
  const isFound = () => {
    if (char.char.isFound) return "opacity-40";
  };
  return (
    <div
      className={`flex flex-col justify-center items-center relative ${isFound()}`}
    >
      {char.char.isFound ? (
        <div className="w-[10px] h-[60px] bg-lime-600 rotate-45 absolute"></div>
      ) : null}

      <img
        className="w-[50px] h-[50px]"
        src={`/icons/${char.char.name}-transparent.png`}
        alt={`${char.char.name} transparent`}
      />
      <p>{char.char.name.charAt(0).toUpperCase() + char.char.name.slice(1)}</p>
    </div>
  );
};

export default PreviewIcons;
