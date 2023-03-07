interface CharData {
  name: string;
  render: boolean;
}

interface Props {
  char: CharData;
}

const PreviewIcons = (char: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
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
