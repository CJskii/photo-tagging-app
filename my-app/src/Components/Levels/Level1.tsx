import React, { useState, useEffect, createContext } from "react";
import GameLevel from "./GameLevel";
import Spinner from "../Spinner";
import { getLevelData, getLeaderboardData } from "../../Firebase/getData";

interface Data {
  [key: string]: any;
}

const Level1 = () => {
  const [renderData, setRenderData] = useState<Data>({});
  const [validationData, setValidationData] = useState<Data>({});
  const [leaderboardData, setLeaderboardData] = useState<Data>({});
  const [loading, setLoading] = useState(true);
  const level = "Level 1";

  useEffect(() => {
    const fetchData = async () => {
      const levelData: any = await getLevelData(level);
      const leaderboardData = await getLeaderboardData(level);
      setRenderData(levelData.Characters);
      setValidationData(levelData.Validation);
      setLeaderboardData(leaderboardData);
      setLoading(false);
      console.log("Data loaded");
    };
    fetchData();
  }, []);

  return (
    <div className="w-full min-h-[92vh] flex flex-col justify-start items-center gap-4 py-8 bg-primary">
      {loading ? (
        <Spinner />
      ) : (
        <GameLevel
          renderData={renderData.data}
          validationData={validationData}
          leaderboardData={leaderboardData}
          level={level}
        />
      )}
    </div>
  );
};

export default Level1;
