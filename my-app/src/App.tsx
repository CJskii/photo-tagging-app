import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Game from "./Components/Game";
import Leaderboard from "./Components/Leaderboard";
import Level1 from "./Components/Levels/Level1";

function App() {
  const [theme, setTheme] = useState("default");

  const changeTheme = (event: React.MouseEvent<HTMLSpanElement>) => {
    const selected = event.currentTarget.textContent?.toLowerCase();
    setTheme(selected || "default");
  };

  return (
    <div className="App bg-base-100 min-h-screen" data-theme={theme}>
      <Navbar changeTheme={changeTheme} />
      <section className="h-[92vh] home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/level1" element={<Level1 />} />
          {/* <Route path="/level2" element={<Level2 />} />
          <Route path="/level3" element={<Level3 />} />
          <Route path="/level4" element={<Level4 />} />
          <Route path="/level5" element={<Level5 />} />
          <Route path="/level6" element={<Level6 />} /> */}
        </Routes>
      </section>
    </div>
  );
}

export default App;
