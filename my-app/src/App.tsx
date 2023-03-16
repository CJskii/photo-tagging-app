import React, { useState, useContext, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Game from "./Components/Game";
import Leaderboard from "./Components/Leaderboard";
import Level1 from "./Components/Levels/Level1";
import Level2 from "./Components/Levels/Level2";
import Level3 from "./Components/Levels/Level3";
import Level4 from "./Components/Levels/Level4";
import Level5 from "./Components/Levels/Level5";
import Level6 from "./Components/Levels/Level6";

export const UsernameContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>(["", () => {}]);

function App() {
  const [theme, setTheme] = useState("default");
  const [userName, setUserName] = useState("");

  const changeTheme = (event: React.MouseEvent<HTMLSpanElement>) => {
    const selected = event.currentTarget.textContent?.toLowerCase();
    setTheme(selected || "default");
  };

  return (
    <div className="App bg-base-100 min-h-screen" data-theme={theme}>
      <Navbar changeTheme={changeTheme} />
      <section className="min-h-[92vh] home">
        <UsernameContext.Provider value={[userName, setUserName]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/level1" element={<Level1 />} />
            <Route path="/level2" element={<Level2 />} />
            <Route path="/level3" element={<Level3 />} />
            <Route path="/level4" element={<Level4 />} />
            <Route path="/level5" element={<Level5 />} />
            <Route path="/level6" element={<Level6 />} />
          </Routes>
        </UsernameContext.Provider>
      </section>
      <Footer />
    </div>
  );
}

export default App;
