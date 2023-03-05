import React from "react";
import { Link } from "react-router-dom";

const Game = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-24 py-12">
      <h1 className="text-5xl">Select level</h1>
      <div className="lg:full gap-8 h-full flex justify-evenly flex-wrap">
        <div className="card bg-base-300 w-[300px] h-[300px] flex flex-col justify-start items-center p-4 gap-4">
          <h1 className="text-3xl">Level 1</h1>
          <Link to="/level1">
            <img
              className="h-[216px] w-[268px] bg-base-100 rounded hover:scale-105 transition-transform cursor-pointer object-cover"
              src="/levels/level-1.jpg"
            />
          </Link>
        </div>
        <div className="card bg-base-300 w-[300px] h-[300px] flex flex-col justify-start items-center p-4 gap-4">
          <h1 className="text-3xl">Level 2</h1>
          <Link to="/game/level2">
            <img
              className="h-[216px] w-[268px] bg-base-100 rounded hover:scale-105 transition-transform cursor-pointer object-cover"
              src="/levels/level-2.jpg"
            />
          </Link>
        </div>
        <div className="card bg-base-300 w-[300px] h-[300px] flex flex-col justify-start items-center p-4 gap-4">
          <h1 className="text-3xl">Level 3</h1>
          <Link to="/game/level3">
            <img
              className="h-[216px] w-[268px] bg-base-100 rounded hover:scale-105 transition-transform cursor-pointer object-cover"
              src="/levels/level-3.jpg"
            />
          </Link>
        </div>
        <div className="card bg-base-300 w-[300px] h-[300px] flex flex-col justify-start items-center p-4 gap-4">
          <h1 className="text-3xl">Level 4</h1>
          <Link to="/game/level4">
            <img
              className="h-[216px] w-[268px] bg-base-100 rounded hover:scale-105 transition-transform cursor-pointer object-cover"
              src="/levels/level-4.jpg"
            />
          </Link>
        </div>
        <div className="card bg-base-300 w-[300px] h-[300px] flex flex-col justify-start items-center p-4 gap-4">
          <h1 className="text-3xl">Level 5</h1>
          <Link to="/game/level5">
            <img
              className="h-[216px] w-[268px] bg-base-100 rounded hover:scale-105 transition-transform cursor-pointer object-cover"
              src="/levels/level-5.jpg"
            />
          </Link>
        </div>
        <div className="card bg-base-300 w-[300px] h-[300px] flex flex-col justify-start items-center p-4 gap-4">
          <h1 className="text-3xl">Level 6</h1>
          <Link to="/game/level6">
            <img
              className="h-[216px] w-[268px] bg-base-100 rounded hover:scale-105 transition-transform cursor-pointer object-cover"
              src="/levels/level-6.jpg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Game;
