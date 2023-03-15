import React, { useEffect, useState, useContext } from "react";
import formatTime from "./Levels/HelperFunctions/formatTime";
import { UsernameContext } from "../App";
import { getUserData, getLeaderboardData } from "../Firebase/getData";

interface Props {
  time: number;
  allFound: boolean;
  setTime: (time: number) => void;
  level: string;
  leaderboardData: {
    [key: string]: {
      time: number;
      timestamp: number;
    };
  };
}

const Time = ({ time, setTime, allFound, level, leaderboardData }: Props) => {
  const [localTime, setLocalTime] = useState(0);
  const [userName, setUserName] = useContext(UsernameContext);
  const [bestUserTime, setBestUserTime] = useState<number | null>(null);
  const [bestLevelTime, setBestLevelTime] = useState<number | null>(null);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      if (!allFound) {
        setLocalTime(localTime + 1);
      } else {
        setTime(localTime);
      }
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [localTime]);

  useEffect(() => {
    userBest();
    levelBest();
  }, [leaderboardData]);

  const userBest = async () => {
    if (userName != "") {
      const userData = await getUserData({ level, userName });
      Object.keys(userData).length === 0
        ? () => {}
        : setBestUserTime(userData[userName].time);
    }
  };

  const levelBest = async () => {
    let bestScore: number = Number.MAX_SAFE_INTEGER;
    Object.values(leaderboardData).forEach((user) => {
      user.time < bestScore ? (bestScore = user.time) : () => {};
    });
    setBestLevelTime(bestScore);
  };

  return (
    <div className="flex flex-col justify-center items-end px-4">
      {allFound ? null : (
        <div className="text-xl font-bold">
          📢 Current time: {formatTime(localTime)}
        </div>
      )}
      {bestUserTime ? (
        <div className="text-xl">
          🌟 Your best time: {formatTime(bestUserTime)}
        </div>
      ) : null}

      {bestLevelTime ? (
        <div className="text-xl">
          🏆 Leaderboard top: {formatTime(bestLevelTime)}
        </div>
      ) : null}
    </div>
  );
};

export default Time;
