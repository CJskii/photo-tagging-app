import { useState } from "react";
import { Link } from "react-router-dom";

interface LevelData {
  description: string;
  path: string;
  src: string;
}

interface Props {
  data: LevelData;
}

const GameCard = (data: Props) => {
  const [level, setLevel] = useState(data.data);
  return (
    <div className="card bg-base-300 w-[300px] h-[300px] flex flex-col justify-start items-center p-4 gap-4">
      <h1 className="text-3xl">{level.description}</h1>
      <Link to={level.path}>
        <img
          className="h-[216px] w-[268px] bg-base-100 rounded hover:scale-105 transition-transform cursor-pointer object-cover"
          src={`/levels/${level.src}`}
        />
      </Link>
    </div>
  );
};

export default GameCard;
