import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-start">
      <div className="flex flex-col justify-evenly items-center h-3/5 gap-8 pt-16 rounded m-2 p-4 max-md:text-center max-md:bg-[#bbbbbb99]">
        <h1
          className="text-5xl tracking-widest text-base-200"
          style={{
            textShadow: "0 0 8px white, 0 0 8px white, 0 0 8px white",
          }}
        >
          Where's Waldo Game
        </h1>
        <p className="text-black">
          Classic game implemented with React Typescript, Tailwind and Firebase
        </p>
        <Link to="/game">
          <button className="btn bg-yellow-500 hover:bg-yellow-400 border-none hover:animate-bounce">
            Start playing
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
