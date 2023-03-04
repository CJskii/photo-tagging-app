import React from "react";

const Game = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-24 py-12">
      <h1 className="text-5xl">Select level</h1>
      <div className="lg:w-4/5 gap-8 h-80 flex justify-evenly flex-wrap">
        <div className="card bg-base-300 w-[300px] h-[350px] flex flex-col justify-start items-center p-4 gap-4">
          <h1 className="text-3xl">Easy</h1>
          <div className="h-full w-full bg-base-100 rounded">Image</div>
          <button className="btn bg-base-200 hover:bg-secondary hover:animate-bounce border-none px-8">
            Select
          </button>
        </div>
        <div className="card bg-base-300 w-[300px] h-[350px] flex flex-col justify-start items-center p-4 gap-4">
          <h1 className="text-3xl">Medium</h1>
          <div className="h-full w-full bg-base-100 rounded">Image</div>
          <button className="btn bg-base-200 hover:bg-secondary hover:animate-bounce border-none px-8">
            Select
          </button>
        </div>
        <div className="card bg-base-300 w-[300px] h-[350px] flex flex-col justify-start items-center p-4 gap-4">
          <h1 className="text-3xl">Hard</h1>
          <div className="h-full w-full bg-base-100 rounded">Image</div>
          <button className="btn bg-base-200 hover:bg-secondary hover:animate-bounce border-none px-8">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
