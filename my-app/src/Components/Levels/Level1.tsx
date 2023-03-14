import React, { useState, useEffect, createContext } from "react";
import GameLevel from "./GameLevel";
import Spinner from "../Spinner";
import { getLevelData, getLeaderboardData } from "../../Firebase/getData";

export const renderDataContext = createContext<{
  renderData: { [key: string]: any };
  setRenderData: React.Dispatch<React.SetStateAction<object>>;
}>({ renderData: {}, setRenderData: () => {} });

export const validationDataContext = createContext<{
  validationData: { [key: string]: object };
  setValidationData: React.Dispatch<React.SetStateAction<object>>;
}>({
  validationData: {},
  setValidationData: () => {},
});

export const leaderboardContext = createContext<{
  leaderboardData: { [key: string]: any };
  setLevel: React.Dispatch<React.SetStateAction<object>>;
}>({
  leaderboardData: {},
  setLevel: () => {},
});

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
    <renderDataContext.Provider value={{ renderData, setRenderData }}>
      <validationDataContext.Provider
        value={{ validationData, setValidationData }}
      >
        <leaderboardContext.Provider
          value={{ leaderboardData, setLevel: setLeaderboardData }}
        >
          <div className="w-full min-h-[92vh] flex flex-col justify-start items-center gap-4 py-8 bg-primary">
            {/* {loading ? <Spinner /> : <GameLevel data={data} />} */}
          </div>
        </leaderboardContext.Provider>
      </validationDataContext.Provider>
    </renderDataContext.Provider>
  );
};

export default Level1;
