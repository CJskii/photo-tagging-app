import RestartBtn from "../RestartBtn";
import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { UsernameContext } from "../../App";

interface Props {
  userName: string | null;
  setUserName: (user: string) => void;
}

const GameEnded = () => {
  const [userName, setUserName] = useContext(UsernameContext);
  const inputRef = useRef<HTMLInputElement>(null);
  // Get time
  // Get username

  const submitToLeaderboard = () => {
    if (inputRef.current?.value.length) {
      setUserName(inputRef.current.value);
    }

    console.log(userName);

    // validate if user is already in leaderboard
    // if !leaderboard create new record
    // if user is already in leaderboard check if this time is better
    // time better - update leaderboard
  };

  return (
    <div className="h-full flex flex-col justify-center items-center gap-2">
      <h1 className="text-5xl text-center mb-8">
        Congratulations {userName}! 🥳
      </h1>
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
      {!userName ? (
        <>
          <label className="text-2xl pt-8">Enter your name: </label>
          <input
            type="text"
            className="w-[250px] text-xl pb-2 mb-4"
            ref={inputRef}
          />
        </>
      ) : null}

      <button
        className="btn bg-base-200 hover:bg-secondary hover:animate-bounce mt-4"
        onClick={submitToLeaderboard}
      >
        Submit
      </button>
    </div>
  );
};

export default GameEnded;
