import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      data-testid="navbar"
      className="navbar bg-base-200"
      style={{ height: "8vh" }}
    >
      <div className="navbar-start lg:flex">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Waldo
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="mx-4 max-sm:hidden">
              <Link to="/">Home</Link>
            </li>
            <li className="min-md:mx-4">
              <Link to="/game">Game</Link>
            </li>
            <li className="min-md:mx-4">
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
