import React, { useEffect, useState, useContext } from "react";
import formatTime from "./Levels/HelperFunctions/formatTime";
import { UsernameContext } from "../App";

interface Props {
  allFound: boolean;
  setTime: (time: number) => void;
}

const Time = ({ setTime, allFound }: Props) => {
  const [localTime, setLocalTime] = useState(0);
  const [userName, setUserName] = useContext(UsernameContext);

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

  return (
    <div className="flex flex-col justify-center items-end px-4">
      {allFound ? null : (
        <div className="text-xl font-bold">
          📢 Current time: {formatTime(localTime)}
        </div>
      )}
      <div className="text-xl">🌟 Your best time: </div>
      <div className="text-xl">🏆 Leaderboard top: </div>
    </div>
  );
};

export default Time;
