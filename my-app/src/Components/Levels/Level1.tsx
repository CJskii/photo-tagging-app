import React, { useState, useEffect } from "react";
import GameLevel from "./GameLevel";
import { getLevelData } from "../../Firebase/query";
import Spinner from "../Spinner";

const Level1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const level = "level1";

  useEffect(() => {
    const fetchData = async () => {
      const levelData: any = await getLevelData(level);
      setData(levelData);
      setLoading(false);
      console.log("Data loaded");
    };
    fetchData();
  }, []);

  return (
    <div className="w-full min-h-[92vh] flex flex-col justify-start items-center gap-4 py-8 bg-primary">
      {loading ? <Spinner /> : <GameLevel data={data} />}
    </div>
  );
};

export default Level1;
