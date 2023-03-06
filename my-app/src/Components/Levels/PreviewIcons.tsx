interface CharData {
  name: string;
  render: boolean;
}

interface Props {
  char: CharData;
}

const PreviewIcons = (char: Props) => {
  return (
    <img
      className="w-[50px] h-[50px]"
      src={`/icons/${char.char.name}-transparent.png`}
      alt={`${char.char.name} transparent`}
    />
  );
};

export default PreviewIcons;
