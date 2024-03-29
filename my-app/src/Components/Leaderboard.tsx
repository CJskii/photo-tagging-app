import React, { useState, useEffect } from "react";
import { getLeaderboardData } from "../Firebase/getData";
import formatTime from "./Levels/HelperFunctions/formatTime";
import formatDate from "./Levels/HelperFunctions/formatDate";

const Leaderboard = () => {
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [previousLevel, setPreviousLevel] = useState<number>(0);
  const [nextLevel, setNextLevel] = useState<number>(2);
  const [sortedData, setSortedData] = useState<object[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLeaderboardData(`Level ${currentLevel}`);
      const sortedData = Object.entries(data)
        .sort(([, a], [, b]) => a.time - b.time)
        .map(([key, value]) => ({ name: key, ...value }));
      setSortedData(sortedData);
    };

    fetchData();
  }, [currentLevel]);

  const handleClick = (str: string) => {
    if (str == "+") return levelUp();
    else return levelDown();
  };

  const levelUp = () => {
    if (nextLevel <= 6) {
      setCurrentLevel(nextLevel);
      setPreviousLevel(previousLevel + 1);
      setNextLevel(nextLevel + 1);
    }
  };

  const levelDown = () => {
    if (previousLevel !== null && previousLevel > 0) {
      setCurrentLevel(previousLevel);
      setNextLevel(nextLevel - 1);
      setPreviousLevel(previousLevel - 1);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8 py-12">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-5xl">Leaderboard</h1>
        <div className="btn-group">
          <button className="btn" onClick={() => handleClick("-")}>
            «
          </button>
          <button className="btn">Level {currentLevel}</button>
          <button className="btn" onClick={() => handleClick("+")}>
            »
          </button>
        </div>
      </div>

      <div className="w-4/5 h-full">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th className="text-right">Date</th>
              </tr>
            </thead>
            <tbody>
              {sortedData
                ? sortedData.map((placement: any, index) => {
                    if (index < 100)
                      return (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td>{placement.name}</td>
                          <td>{formatTime(placement.time)}</td>
                          <td className="text-right">
                            {formatDate(placement.timestamp)}
                          </td>
                        </tr>
                      );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
