import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  const [theme, setTheme] = useState("default");

  const changeTheme = (event: React.MouseEvent<HTMLSpanElement>) => {
    const selected = event.currentTarget.textContent?.toLowerCase();
    setTheme(selected || "default");
  };

  return (
    <div
      className="App bg-base-100 h-screen bg-clip-content"
      data-theme={theme}
    >
      <Navbar changeTheme={changeTheme} />
      <section className="h-[92vh] home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<h1>Game page</h1>} />
          <Route path="/leaderboard" element={<h1>Game page</h1>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
