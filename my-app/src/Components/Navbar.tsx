import React from "react";
import { Link } from "react-router-dom";
import Themes from "./Themes";

interface NavbarProps {
  changeTheme: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

const Navbar = ({ changeTheme }: NavbarProps) => {
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="mx-4">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-4">
              <Link to="/game">Game</Link>
            </li>
            <li className="mx-4">
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </div>
        {/* <Themes changeTheme={changeTheme} /> */}
      </div>
    </div>
  );
};

export default Navbar;
