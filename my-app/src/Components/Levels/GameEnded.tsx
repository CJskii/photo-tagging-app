import RestartBtn from "../RestartBtn";
import { Link } from "react-router-dom";
import { useRef, useContext, useEffect, useState } from "react";
import { UsernameContext } from "../../App";
import formatTime from "./HelperFunctions/formatTime";
import submitToLeaderboard from "./HelperFunctions/leaderboardSubmit";
import Spinner from "../Spinner";

const GameEnded = ({ time, level }: { time: number; level: string }) => {
  const [userName, setUserName] = useContext(UsernameContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    if (inputRef.current?.value.length && userName == "") {
      setUserName(inputRef.current.value);
    } else {
      submitToLeaderboard({ level, userName, time });
    }
  };

  return (
    <>
      {time == 0 ? (
        <Spinner />
      ) : (
        <div className="h-full flex flex-col justify-center items-center gap-2">
          <h1 className="text-5xl text-center mb-8">
            Congratulations {userName}! 🥳
          </h1>
          <p className="text-2xl"> You have found all characters 💪</p>
          <p className="text-2xl py-4">Your time is: {formatTime(time)}</p>
          <p className="text-xl">
            {userName !== "" ? (
              <Link to="/game">
                <span className="underline cursor-pointer text-orange-300 hover:text-base-300 hover:animate-pulse ">
                  Return to select a different level
                </span>{" "}
              </Link>
            ) : (
              <>
                You can{" "}
                <span className="underline cursor-pointer text-orange-300 hover:text-base-300">
                  submit
                </span>{" "}
                your name to the leaderboard, or{" "}
                <Link to="/game">
                  <span className="underline cursor-pointer text-orange-300 hover:text-base-300 hover:animate-pulse ">
                    return
                  </span>{" "}
                </Link>
                <>to select a different level</>
              </>
            )}
          </p>
          {!userName ? (
            <>
              <label className="text-2xl pt-8">Enter your name: </label>
              <input
                type="text"
                className="w-[250px] text-xl pb-2 mb-4 bg-neutral"
                ref={inputRef}
              />
            </>
          ) : null}

          <button
            className="btn bg-base-200 hover:bg-secondary hover:animate-bounce mt-4"
            onClick={handleSubmit}
          >
            {userName != "" ? "Submit to leaderboard" : "Submit username"}
          </button>
        </div>
      )}
    </>
  );
};

export default GameEnded;
