import React, { useState, useEffect } from "react";

const Leaderboard = () => {
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [previousLevel, setPreviousLevel] = useState<number | null>(null);
  const [nextLevel, setNextLevel] = useState(2);

  useEffect(() => {
    console.log(`Level: ${currentLevel}`);
  }, [currentLevel]);

  const handleClick = (str: string) => {
    if (str == "+") return levelUp();
    else return levelDown();
  };

  const levelUp = () => {
    if (nextLevel < 6) {
      setCurrentLevel(nextLevel);
      setPreviousLevel(nextLevel);
      setNextLevel(nextLevel + 1);
    }
  };

  const levelDown = () => {
    if (previousLevel !== null && previousLevel > 0) {
      setCurrentLevel(previousLevel);
      setNextLevel(previousLevel);
      setPreviousLevel(previousLevel - 1);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-24 py-12">
      <h1 className="text-5xl">Leaderboard</h1>
      <div className="w-4/5 h-full">
        <div className="flex justify-between items-center">
          {previousLevel ? (
            <button className="btn" onClick={() => handleClick("-")}>
              Level {previousLevel}
            </button>
          ) : (
            <button className="btn bg-transparent text-transparent border-none hover:bg-transparent hover:cursor-auto">
              Level {previousLevel}
            </button>
          )}
          {nextLevel < 6 ? (
            <button className="btn" onClick={() => handleClick("+")}>
              Level {nextLevel}
            </button>
          ) : (
            <button className="btn bg-transparent text-transparent border-none hover:bg-transparent hover:cursor-auto">
              Level {nextLevel}
            </button>
          )}
        </div>
        <p>Map components here</p>
        <p>Map components here</p>
        <p>Map components here</p>
      </div>
    </div>
  );
};

export default Leaderboard;
