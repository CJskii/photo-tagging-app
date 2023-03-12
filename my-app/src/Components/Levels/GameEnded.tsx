import RestartBtn from "../RestartBtn";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const GameEnded = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  // Get time
  // Get username

  const submitToLeaderboard = () => {
    console.log(inputRef.current?.value);
    // validate if user is already in leaderboard
    // if !leaderboard create new record
    // if user is already in leaderboard check if this time is better
    // time better - update leaderboard
  };

  return (
    <div className="h-full flex flex-col justify-center items-center gap-2">
      <h1 className="text-5xl text-center mb-8">Congratulations! 🥳</h1>
      <p className="text-2xl"> You have found all characters 💪</p>
      <p className="text-2xl py-4">Your time is: </p>
      <p className="text-xl">
        You can{" "}
        <span className="underline cursor-pointer text-orange-300 hover:text-base-300">
          submit
        </span>{" "}
        your name to leaderboard, or{" "}
        <Link to="/game">
          <span className="underline cursor-pointer text-orange-300 hover:text-base-300 hover:animate-pulse ">
            return
          </span>{" "}
        </Link>
        to select a different level
      </p>
      <label className="text-2xl pt-8">Enter your name: </label>
      <input
        type="text"
        className="w-[250px] text-xl pb-2 mb-4"
        ref={inputRef}
      />

      <button
        className="btn bg-base-200 hover:bg-secondary hover:animate-bounce"
        onClick={submitToLeaderboard}
      >
        Submit
      </button>
    </div>
  );
};

export default GameEnded;
