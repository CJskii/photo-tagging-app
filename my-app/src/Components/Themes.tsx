import React from "react";

interface ThemesProps {
  changeTheme: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

const Themes = ({ changeTheme }: ThemesProps) => {
  return (
    <div className="dropdown dropdown-left">
      <label
        tabIndex={0}
        className="m-1 text-base-content px-8 py-4 rounded-box btn"
      >
        Themes
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52 "
      >
        <li>
          <span onClick={(e) => changeTheme(e)}>Default</span>
        </li>
        <li>
          <span onClick={(e) => changeTheme(e)}>Dark</span>
        </li>
        <li>
          <span onClick={(e) => changeTheme(e)}>Synthwave</span>
        </li>
      </ul>
    </div>
  );
};

export default Themes;
