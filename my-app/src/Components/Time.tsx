import React, { useEffect, useState, useContext } from "react";
import formatTime from "./Levels/HelperFunctions/formatTime";
import { UsernameContext } from "../App";
import { getUserData } from "../Firebase/getData";

interface Props {
  time: number;
  allFound: boolean;
  setTime: (time: number) => void;
  level: string;
}

const Time = ({ time, setTime, allFound, level }: Props) => {
  const [localTime, setLocalTime] = useState(0);
  const [userName, setUserName] = useContext(UsernameContext);
  const [bestUserTime, setBestUserTime] = useState(null);
  const [bestLevelTime, setBestLevelTime] = useState(null);

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
  }, []);

  const userBest = async () => {
    if (userName != "") {
      const userData = await getUserData({ level, userName });
      Object.keys(userData).length === 0
        ? setBestUserTime(null)
        : setBestUserTime(userData[userName].time);
    }
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

      <div className="text-xl">🏆 Leaderboard top: </div>
    </div>
  );
};

export default Time;
