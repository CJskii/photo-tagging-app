import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home w-full h-full flex justify-center items-start">
      <div className="flex flex-col justify-evenly items-center h-2/5">
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
        <button className="btn bg-yellow-500 hover:bg-yellow-400 border-none">
          Start playing
        </button>
      </div>
    </div>
  );
};

export default Home;
