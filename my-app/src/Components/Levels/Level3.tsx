import React, { useState, useEffect } from "react";
import GameLevel from "./GameLevel";
import Spinner from "../Spinner";
import fetchData from "./HelperFunctions/fetchLevelData";

interface Data {
  [key: string]: any;
}

const Level1 = () => {
  const [renderData, setRenderData] = useState<Data>({});
  const [validationData, setValidationData] = useState<Data>({});
  const [leaderboardData, setLeaderboardData] = useState<Data>({});
  const [loading, setLoading] = useState(true);
  const level = "Level 3";

  useEffect(() => {
    fetchData({
      setRenderData,
      setValidationData,
      setLeaderboardData,
      setLoading,
      level,
    });
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
