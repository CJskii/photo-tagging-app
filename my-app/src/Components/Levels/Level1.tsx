import React, { useState, useEffect } from "react";
import GameLevel from "./GameLevel";
import { getLevelData } from "../../Firebase/query";

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
    <div className="w-full h-full flex flex-col justify-start items-center gap-4 py-8 bg-primary">
      {loading ? <h1>LOADING</h1> : <GameLevel data={data} />}
    </div>
  );
};

export default Level1;
